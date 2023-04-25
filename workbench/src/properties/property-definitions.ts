import { ElementType, Property } from "./utils"

export const ServiceProperty: Property = {
  type: "dse:Service",
  name: "service",
  label: "Service",
  description: "(Functional) Decision Support Service to support the task",
  applicableElements: [ElementType.Task],
}

export const InputProperty: Property = {
  type: "dse:Input",
  name: "input",
  label: "Input",
  description: "Input method data of service",
  applicableElements: [ElementType.DataInputAssociation],
}

export const OutputProperty: Property = {
  type: "dse:Output",
  name: "output",
  label: "Output",
  description: "Output method data of service",
  applicableElements: [ElementType.DataOutputAssociation],
}
