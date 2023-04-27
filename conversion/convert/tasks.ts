import { BPMN, DSE, ZEEBE } from "../enums"

// TODO convert data input/output associations to variable assignments

export type Service = any // TODO

function getResponseVarName(task: any) {
  // TODO handle no output
  const name =
    task[BPMN.DataOutputAssociation][0][BPMN.ExtensionElements][0][DSE.Source]
  delete task[BPMN.DataOutputAssociation][0][BPMN.ExtensionElements]
  return name
}

function getProcessVarName(task: any, dataObjectReferences: any[]) {
  // TODO handle no output
  const dataObjRefId = task[BPMN.DataOutputAssociation][0][BPMN.TargetRef][0]
  const dataObjRef = dataObjectReferences.find(
    (dor) => dor.$.id === dataObjRefId
  )
  return dataObjRef.$.name
}

export function convertTask(
  task: any,
  dataObjectReferences: any,
  services: { [id: string]: Service }
) {
  task.$ = {
    ...task.$,
    "zeebe:modelerTemplate": "io.camunda.connectors.HttpJson.v2",
    "zeebe:modelerTemplateIcon": icon,
  }
  const serviceId = task[BPMN.ExtensionElements][0][DSE.Service]
  delete task[BPMN.ExtensionElements][0][DSE.Service]

  const responseVarName = getResponseVarName(task)
  const processVarName = getProcessVarName(task, dataObjectReferences)

  task[BPMN.ExtensionElements] = {
    "zeebe:taskDefinition": [
      {
        $: { type: "io.camunda:http-json:1" },
      },
    ],
    "zeebe:ioMapping": [
      {
        "zeebe:input": [
          { $: { source: "noAuth", target: "authentication.type" } },
          { $: { source: "post", target: "method" } },
          // TODO obtain URL from service
          {
            $: {
              source: "https://postman-echo.com/post",
              target: "url",
            },
          },
          // TODO increase connection timeout
          {
            $: { source: "20", target: "connectionTimeoutInSeconds" },
          },
          // TODO set dynamically
          {
            $: { source: `={"test": myVar}`, target: "body" },
          },
        ],
      },
    ],
    "zeebe:taskHeaders": [
      {
        // TODO set values below dynamically
        "zeebe:header": [
          {
            $: {
              key: "resultExpression",
              value: `={"${processVarName}" : body.${responseVarName}}`,
            },
          },
          // { $: { key: "errorExpression" } },
        ],
      },
    ],
  }
}

const icon = `data:image/svg+xml;utf8,%3Csvg%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M17.0335%208.99997C17.0335%2013.4475%2013.4281%2017.0529%208.98065%2017.0529C4.53316%2017.0529%200.927765%2013.4475%200.927765%208.99997C0.927765%204.55248%204.53316%200.947083%208.98065%200.947083C13.4281%200.947083%2017.0335%204.55248%2017.0335%208.99997Z%22%20fill%3D%22%23505562%22%2F%3E%0A%3Cpath%20d%3D%22M4.93126%2014.1571L6.78106%203.71471H10.1375C11.1917%203.71471%2011.9824%203.98323%2012.5095%204.52027C13.0465%205.04736%2013.315%205.73358%2013.315%206.57892C13.315%207.44414%2013.0714%208.15522%2012.5841%208.71215C12.1067%209.25913%2011.4553%209.63705%2010.6298%209.8459L12.0619%2014.1571H10.3315L9.03364%2010.0249H7.24351L6.51254%2014.1571H4.93126ZM7.49711%208.59281H9.24248C9.99832%208.59281%2010.5901%208.42374%2011.0177%208.08561C11.4553%207.73753%2011.6741%207.26513%2011.6741%206.66842C11.6741%206.19106%2011.5249%205.81811%2011.2265%205.54959C10.9282%205.27113%2010.4558%205.1319%209.80936%205.1319H8.10874L7.49711%208.59281Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E%0A`
