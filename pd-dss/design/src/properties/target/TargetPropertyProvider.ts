import { addProperty } from "../utils"
import { TargetProperty } from "../property-definitions"

const LOW_PRIORITY = 500

export default function TargetPropertyProvider(propertiesPanel: any) {
  this.getGroups = (element: unknown) => {
    return addProperty(element, TargetProperty)
  }

  propertiesPanel.registerProvider(LOW_PRIORITY, this)
}

TargetPropertyProvider.$inject = ["propertiesPanel", "translate"]
