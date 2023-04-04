import { is } from "bpmn-js/lib/util/ModelUtil"

export type Element = unknown
export type TranslateFn = (text: string) => string

export interface PropertiesGroup {
  id: string,
  label: string,
  type: string;
  entries: any[]
}

export function addGroup(element: Element, group: PropertiesGroup) {
  return (groups: unknown[]) => {
    if (is(element, group.type)) {
      groups.push({
        id: group.id,
        label: group.label, // TODO wrap with "translate"?
        entries: group.entries
      })
    }
    return groups
  }
}

export interface PropertyInput<T = string> {
  id: string,
  type: "text";
  label: string,
  description: string,
  getValue: (element: Element) => T
  setValue: (element: Element, moddle, modeling, value: T) => void
}

export function getExtensionElement(element: any, type: string) {
  if (!element.extensionElements) {
    return;
  }

  return element.extensionElements.values.filter((extensionElement: any) => {
    return extensionElement.$instanceOf(type);
  })[0];
}