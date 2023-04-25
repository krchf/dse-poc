import { ElementType, Property } from "./utils"

export const ServiceProperty: Property = {
  type: "dse:Service",
  name: "service",
  label: "Service",
  description: "Decision Support Service",
  applicableElements: [ElementType.Task, ElementType.DataObject],
}

export const SourceProperty: Property = {
  type: "dse:Source",
  name: "source",
  label: "Source",
  description: "Output method data of service",
  applicableElements: [ElementType.DataOutputAssociation],
}

export const TargetProperty: Property = {
  type: "dse:Target",
  name: "target",
  label: "Target",
  description: "Input method data of service",
  applicableElements: [ElementType.DataInputAssociation],
}
