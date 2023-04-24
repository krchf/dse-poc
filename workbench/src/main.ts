import "./style.css"

import BpmnJS from "bpmn-js/lib/Modeler"
import "bpmn-js/dist/assets/bpmn-js.css"
import "bpmn-js/dist/assets/diagram-js.css"
import "bpmn-js/dist/assets/bpmn-font/css/bpmn.css"

import {
  BpmnPropertiesPanelModule,
  BpmnPropertiesProviderModule,
} from "bpmn-js-properties-panel"
import "bpmn-js-properties-panel/dist/assets/properties-panel.css"

import { supabase } from "./supabase-client"

import ServicePropertyProviderModule from "./properties/service"
import InputPropertyProviderModule from "./properties/input"
import { generateDescriptors } from "./properties/utils"
import { ServiceProperty } from "./properties/service/ServiceProperty"
import { InputProperty } from "./properties/input/InputProperty"

const id = new URLSearchParams(window.location.search).get("id")

const descriptors = generateDescriptors([ServiceProperty, InputProperty])

let modeler = new BpmnJS({
  container: "#canvas",
  // https://github.com/bpmn-io/bpmn-js-properties-panel/issues/903
  propertiesPanel: {
    parent: "#properties",
  },
  additionalModules: [
    BpmnPropertiesPanelModule,
    BpmnPropertiesProviderModule,
    ServicePropertyProviderModule,
    InputPropertyProviderModule,
  ],
  moddleExtensions: {
    dse: descriptors,
  },
})

// load model
const { data, error } = await supabase.storage
  .from("models")
  .download(`${id}.xml`)

if (error) {
  console.error(error)
}

if (data) {
  modeler.importXML(await data.text())
} else {
  modeler.createDiagram()
}

async function saveModel() {
  const xml = (await modeler.saveXML({})).xml as string
  const svg = (await modeler.saveSVG()).svg

  const { data: xmlData, error: xmlError } = await supabase.storage
    .from("models")
    .upload(`${id}.xml`, xml, {
      contentType: "application/xml",
      upsert: true,
    })

  if (xmlError) {
    console.error(xmlError)
  }

  const { data: svgData, error: svgError } = await supabase.storage
    .from("models")
    .upload(`${id}.svg`, svg, { contentType: "image/svg+xml", upsert: true })

  if (svgError) {
    console.error(svgError)
  }

  if (!xmlError && !svgError) {
    alert("Save successful!")
  }
}

function undo() {
  // TODO fix type (related to https://github.com/bpmn-io/bpmn-js-properties-panel/issues/903 ?)
  ;(modeler as any).get("commandStack").undo()
}

function redo() {
  // TODO fix type (related to https://github.com/bpmn-io/bpmn-js-properties-panel/issues/903 ?)
  ;(modeler as any).get("commandStack").redo()
}

const saveBtn = document.getElementById("saveBtn") as HTMLButtonElement
saveBtn.onclick = saveModel

function addShortcut(key: string, fn: () => any) {
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === key.toLowerCase()) {
      e.preventDefault()
      fn()
    }
  })
}

addShortcut("s", saveModel)
addShortcut("z", undo)
addShortcut("y", redo)
