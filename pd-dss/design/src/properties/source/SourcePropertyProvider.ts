import { addProperty } from "../utils"
import { SourceProperty } from "../property-definitions"

const LOW_PRIORITY = 500

export default function SourcePropertyProvider(propertiesPanel: any) {
  this.getGroups = (element: unknown) => {
    return addProperty(element, SourceProperty)
  }

  propertiesPanel.registerProvider(LOW_PRIORITY, this)
}

SourcePropertyProvider.$inject = ["propertiesPanel", "translate"]
