import xml2js from "xml2js"
import example from "./examples/1"
import { convertSequenceFlow } from "./convert/sequence-flow"
import { BPMN } from "./enums"
import { convertTask } from "./convert/tasks"

async function convertToCamunda() {
  const json = await xml2js.parseStringPromise(example)
  convertSequenceFlow(
    json[BPMN.Definitions][BPMN.Process][0][BPMN.SequenceFlow][3]
  )
  convertTask(
    json[BPMN.Definitions][BPMN.Process][0][BPMN.Task][0],
    json[BPMN.Definitions][BPMN.Process][0][BPMN.DataObjectReference],
    {}
  )
  const xml = new xml2js.Builder().buildObject(json)
  console.log(xml)
}

convertToCamunda()
