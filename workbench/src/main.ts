import './style.css'

import BpmnJS from "bpmn-js/lib/Modeler"
import "bpmn-js/dist/assets/bpmn-js.css"
import "bpmn-js/dist/assets/diagram-js.css"
import "bpmn-js/dist/assets/bpmn-font/css/bpmn.css"

import {
  BpmnPropertiesPanelModule,
  BpmnPropertiesProviderModule
} from 'bpmn-js-properties-panel';
import "bpmn-js-properties-panel/dist/assets/properties-panel.css"

import magicPropertiesProviderModule from './provider/magic';
import magicModdleDescriptor from './descriptors/magic.json';

import { Model } from "../../shared/types/models"


const API_URL = "http://localhost:3000/api/models/"
const id = new URLSearchParams(window.location.search).get("id")

let model: Model;
let modeler = new BpmnJS({
  container: "#canvas",
  // https://github.com/bpmn-io/bpmn-js-properties-panel/issues/903
  propertiesPanel: {
    parent: '#properties'
  },
  additionalModules: [
    BpmnPropertiesPanelModule,
    BpmnPropertiesProviderModule,
    magicPropertiesProviderModule
  ],
  moddleExtensions: {
    magic: magicModdleDescriptor
  }
});

// load model
fetch(API_URL + id).then(res => res.json()).then((modelResponse) => {
  model = modelResponse
  console.log("loaded model:", model)

  if (model.xml) {
    modeler.importXML(model.xml)
  } else {
    modeler.createDiagram()
  }
})

async function saveModel() {
  model.xml = (await
    modeler.saveXML({})).xml as string

  console.log("saving model:", model)

  fetch(API_URL + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(model)
  }).catch(console.error)
}

function undo() {
  // TODO fix type (related to https://github.com/bpmn-io/bpmn-js-properties-panel/issues/903 ?)
  (modeler as any).get('commandStack').undo();
}

function redo() {
  // TODO fix type (related to https://github.com/bpmn-io/bpmn-js-properties-panel/issues/903 ?)
  (modeler as any).get('commandStack').redo();
}

const saveBtn = document.getElementById("saveBtn") as HTMLButtonElement;
saveBtn.onclick = saveModel

function addShortcut(key: string, fn: () => any) {
  document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key === key.toLowerCase()) {
      e.preventDefault();
      fn();
    }
  })
}

addShortcut("s", saveModel)
addShortcut("z", undo)
addShortcut("y", redo)
