import { addGroup as addProperty } from "../utils"

const LOW_PRIORITY = 500

export default function MagicPropertiesProvider(propertiesPanel, translate) {
  this.getGroups = (element: unknown) => {
    return addProperty(element, {
      type: "magic:BewitchedStartEvent",
      name: "spell",
      label: "Spell",
      description: "Some magic spell",
      applicableElements: ["bpmn:StartEvent"],
    })
  }

  propertiesPanel.registerProvider(LOW_PRIORITY, this)
}

MagicPropertiesProvider.$inject = ["propertiesPanel", "translate"]
