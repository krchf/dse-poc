import { is } from "bpmn-js/lib/util/ModelUtil"
import { createEntry } from "./utils/entries"

export enum ElementType {
  StartEvent = "bpmn:StartEvent",
  Task = "bpmn:Task",
  DataInputAssociation = "bpmn:DataInputAssociation",
  DataOutputAssociation = "bpmn:DataOutputAssociation",
  DataObject = "bpmn:DataObjectReference",
  SequenceFlow = "bpmn:SequenceFlow",
}

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

export type Element = any
export type TranslateFn = (text: string) => string

export function addProperty(element: Element, prop: Property) {
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

export function getExtensionElement(element: Element, type: string) {
  if (!element.extensionElements) {
    return
  }

  return element.extensionElements.values.filter((extensionElement: any) => {
    return extensionElement.$instanceOf(type)
  })[0]
}

export function generateDescriptors(properties: Property[]) {
  return {
    name: "Decision Support Ecosystem",
    prefix: "dse",
    uri: "http://dse.krchf.de",
    xml: {
      tagAlias: "lowerCase",
    },
    associations: [],
    types: properties.map((p) => ({
      name: p.type.slice(4),
      superClass: ["Element"],
      properties: [
        {
          name: p.name,
          type: "String",
          isBody: true,
        },
      ],
    })),
  }
}
