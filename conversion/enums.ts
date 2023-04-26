export enum BPMN {
  Definitions = "bpmn:definitions",
  Process = "bpmn:process",
  StartEvent = "bpmn:startEvent",
  SequenceFlow = "bpmn:sequenceFlow",
  ExtensionElements = "bpmn:extensionElements",
  ConditionExpression = "bpmn:conditionExpression",
  ServiceTask = "bpmn:serviceTask",
}

export enum DSE {
  Condition = "dse:condition",
  Service = "dse:service",
}

export enum ZEEBE {
  ModelerTemplate = "zeebe:modelerTemplate",
  TaskDefinition = "zeebe:taskDefinition",
  IoMapping = "zeebe:ioMapping",
  Input = "zeebe:input",
  TaskHeaders = "zeebe:taskHeaders",
  Header = "zeebe:header",
}
