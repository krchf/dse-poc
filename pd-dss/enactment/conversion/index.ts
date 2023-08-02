import xml2js from "xml2js"
import example from "./examples/2-gateway"
import { convertSequenceFlow } from "./convert/sequence-flow"
import { BPMN } from "./enums"
import { convertServiceTask } from "./convert/service-tasks"

async function convertToCamunda() {
  // TODO convert Task to Service-/UserTask

  const json = await xml2js.parseStringPromise(example)

  // register "zeebe" prefix
  json[BPMN.Definitions].$["xmlns:zeebe"] =
    "http://camunda.org/schema/zeebe/1.0"

  // ensure process executability
  json[BPMN.Definitions][BPMN.Process][0].$.isExecutable = "true"

  for (const flow of json[BPMN.Definitions][BPMN.Process][0][BPMN.SequenceFlow])
    convertSequenceFlow(flow)

  for (const task of json[BPMN.Definitions][BPMN.Process][0][BPMN.ServiceTask])
    convertServiceTask(
      task,
      json[BPMN.Definitions][BPMN.Process][0][BPMN.DataObjectReference],
      {
        "postman-echo": {
          location: "https://postman-echo.com/post",
        },
      }
    )

  const xml = new xml2js.Builder().buildObject(json)
  console.log(xml)
}

convertToCamunda()
