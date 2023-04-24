import { ElementType, Property } from "../utils"

export const ServiceProperty: Property = {
  type: "dse:Service",
  name: "service",
  label: "Service",
  description: "(Functional) Decision Support Service to support the task",
  applicableElements: [ElementType.Task],
}
