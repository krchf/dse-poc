import { is } from "bpmn-js/lib/util/ModelUtil"
import { createEntry } from "./utils/entries"

export type ElementType = "bpmn:StartEvent" | "bpmn:Activity" | "..."

export interface Property {
  /** Name of the type in the associated descriptor JSON. */
  type: string
  /** Name of the property in the associated descriptor JSON. */
  name: string
  /** Human-readable name. */
  label: string
  /** Human-readable description. */
  description: string
  /** Elements which this property can be set for. */
  applicableElements: ElementType[]
}

// ------------------------

export type Element = unknown
export type TranslateFn = (text: string) => string

export function addGroup(element: Element, prop: Property) {
  return (groups: unknown[]) => {
    let isApplicable = false

    for (const type of prop.applicableElements) {
      if (is(element, type)) {
        isApplicable = true
      }
    }

    if (isApplicable) {
      groups.push({
        id: "DSE",
        label: "Decision Support Ecosystem",
        entries: [createEntry(element, prop)],
      })
    }

    return groups
  }
}

export function getExtensionElement(element: any, type: string) {
  if (!element.extensionElements) {
    return
  }

  return element.extensionElements.values.filter((extensionElement: any) => {
    return extensionElement.$instanceOf(type)
  })[0]
}
