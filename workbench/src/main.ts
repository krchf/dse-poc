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

const saveBtn = document.getElementById("saveBtn") as HTMLButtonElement;
saveBtn.onclick = async () => {
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