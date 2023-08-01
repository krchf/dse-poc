import { addProperty } from "../utils"
import { ConditionProperty } from "../property-definitions"

const LOW_PRIORITY = 500

export default function ConditionPropertyProvider(propertiesPanel: any) {
  this.getGroups = (element: unknown) => {
    return addProperty(element, ConditionProperty)
  }

  propertiesPanel.registerProvider(LOW_PRIORITY, this)
}

ConditionPropertyProvider.$inject = ["propertiesPanel", "translate"]
