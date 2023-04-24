import { ElementType, Property } from "../utils"

export const InputProperty: Property = {
  type: "dse:input",
  name: "input",
  label: "Input",
  description: "Input method data of service",
  applicableElements: [ElementType.DataInputAssociation],
}
