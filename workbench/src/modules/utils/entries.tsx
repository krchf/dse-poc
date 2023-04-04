import {
  TextFieldEntry,
  isTextFieldEntryEdited,
} from "@bpmn-io/properties-panel"
import { useService } from "bpmn-js-properties-panel"

import { PropertyInput } from "../utils"

export function createInput(element: Element, input: PropertyInput) {
  return {
    id: input.id,
    element,
    isEdited: isTextFieldEntryEdited, // TODO account for other types
    component: (props) => {
      const { element, id } = props

      const moddle = useService("moddle") // bpmnModeler.get('moddle') ??
      const modeling = useService("modeling")
      //   const translate = useService("translate")
      const debounce = useService("debounceInput")

      const setValue = (value) => {
        input.setValue(element, moddle, modeling, value)
      }

      //   TODO wrap label/description with "translate"?
      return (
        <TextFieldEntry
          id={id}
          element={element}
          label={input.label}
          description={input.description}
          getValue={() => input.getValue()}
          setValue={setValue}
          debounce={debounce}
        />
      )
    },
  }
}
