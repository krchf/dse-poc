import { addProperty } from "../utils"
import { ServiceProperty } from "../property-definitions"

const LOW_PRIORITY = 500

export default function ServicePropertyProvider(propertiesPanel: any) {
  this.getGroups = (element: unknown) => {
    return addProperty(element, ServiceProperty)
  }

  propertiesPanel.registerProvider(LOW_PRIORITY, this)
}

ServicePropertyProvider.$inject = ["propertiesPanel", "translate"]
