export enum BPMN {
  Definitions = "bpmn:definitions",
  Process = "bpmn:process",
  StartEvent = "bpmn:startEvent",
  SequenceFlow = "bpmn:sequenceFlow",
  ExtensionElements = "bpmn:extensionElements",
  ConditionExpression = "bpmn:conditionExpression",
  ServiceTask = "bpmn:serviceTask",
  Task = "bpmn:task",
  DataOutputAssociation = "bpmn:dataOutputAssociation",
  DataInputAssociation = "bpmn:dataInputAssociation",
  TargetRef = "bpmn:targetRef",
  SourceRef = "bpmn:sourceRef",
  DataObjectReference = "bpmn:dataObjectReference",
}

export enum DSE {
  Condition = "dse:condition",
  Service = "dse:service",
  Source = "dse:source",
  Target = "dse:target",
}

export enum ZEEBE {
  ModelerTemplate = "zeebe:modelerTemplate",
  TaskDefinition = "zeebe:taskDefinition",
  IoMapping = "zeebe:ioMapping",
  Input = "zeebe:input",
  TaskHeaders = "zeebe:taskHeaders",
  Header = "zeebe:header",
}
