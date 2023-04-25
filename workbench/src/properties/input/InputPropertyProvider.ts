import { addProperty } from "../utils"
import { InputProperty } from "../property-definitions"

const LOW_PRIORITY = 500

export default function InputPropertyProvider(propertiesPanel: any) {
  this.getGroups = (element: unknown) => {
    return addProperty(element, InputProperty)
  }

  propertiesPanel.registerProvider(LOW_PRIORITY, this)
}

InputPropertyProvider.$inject = ["propertiesPanel", "translate"]
