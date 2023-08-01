import {
  TextFieldEntry,
  isTextFieldEntryEdited,
} from "@bpmn-io/properties-panel"
import { useService } from "bpmn-js-properties-panel"

import { Property, getExtensionElement } from "../utils"

function escapeString(str: String) {
  return str
    .replaceAll(/&\s/g, "&amp;")
    .replaceAll(/</g, "&lt;")
    .replaceAll(/>/g, "&gt;")
    .replaceAll(/'/g, "&apos;")
    .replaceAll(/"/g, "&quot;")
}

export function createEntry(element: Element, property: Property) {
  return {
    id: property.type,
    element,
    isEdited: isTextFieldEntryEdited, // TODO account for other types
    component: (props: any) => {
      const { element, id } = props

      const moddle = useService("moddle")
      const modeling = useService("modeling")
      const debounce = useService("debounceInput")

      const getValue = () => {
        const extensions = getExtensionElement(
          element.businessObject,
          property.type
        )
        return extensions ? extensions[property.name] : ""
      }

      const setValue = (value: any) => {
        const extensionElements =
          element.businessObject.extensionElements ||
          moddle.create("bpmn:ExtensionElements")

        let ext = getExtensionElement(element.businessObject, property.type)

        if (!ext) {
          ext = moddle.create(property.type)
          extensionElements.get("values").push(ext)
        }

        ext[property.name] = escapeString(value)

        return modeling.updateProperties(element, {
          extensionElements,
        })
      }

      //   TODO wrap label/description with "translate"?
      return (
        <TextFieldEntry
          id={id}
          element={element}
          label={property.label}
          description={property.description}
          getValue={getValue}
          setValue={setValue}
          debounce={debounce}
        />
      )
    },
  }
}
