import { BPMN, DSE } from "../enums"

interface XmlSequenceFlow {
  // $: any
  [BPMN.ExtensionElements]?: [
    {
      [DSE.Condition]: [string]
    }
  ]
  [BPMN.ConditionExpression]?: {
    $: any
    _: string
  }
}

function createCondition(condition: string) {
  return {
    $: { "xsi:type": "bpmn:tFormalExpression" },
    _: "=" + condition,
  }
}

export function getCondition(flow: XmlSequenceFlow) {
  const extensionElements = flow[BPMN.ExtensionElements]

  if (extensionElements) {
    const condition = extensionElements[0][DSE.Condition][0]

    if (condition && condition.length > 0) {
      return condition
    }
  }

  return null
}

export function convertSequenceFlow(flow: XmlSequenceFlow) {
  const condition = getCondition(flow)

  if (condition) {
    flow[BPMN.ConditionExpression] = createCondition(condition)
  }

  delete flow[BPMN.ExtensionElements]
}
