import { addProperty } from "../utils"
import { OutputProperty } from "../property-definitions"

const LOW_PRIORITY = 500

export default function OutputPropertyProvider(propertiesPanel: any) {
  this.getGroups = (element: unknown) => {
    return addProperty(element, OutputProperty)
  }

  propertiesPanel.registerProvider(LOW_PRIORITY, this)
}

OutputPropertyProvider.$inject = ["propertiesPanel", "translate"]
