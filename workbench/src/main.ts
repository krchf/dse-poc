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

const modeler = new BpmnJS({
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
})
modeler.createDiagram()

const saveBtn = document.getElementById("saveBtn") as HTMLButtonElement;
saveBtn.onclick = () => {
  modeler.saveXML({}).then(res => console.log(res.xml));
}