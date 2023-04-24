import { addGroup, getExtensionElement } from '../utils';
import { createInput } from '../utils/entries';
import spellProps from './parts/SpellProps';

const LOW_PRIORITY = 500;

export default function MagicPropertiesProvider(propertiesPanel, translate) {
    this.getGroups = (element: unknown) => {
        return addGroup(element, {
            id: 'magic',
            label: 'Magic properties',
            type: "bpmn:StartEvent",
            entries: [
                createInput(element, {
                    id: "spell",
                    label: "Spell",
                    description: "Some black magic spell...",
                    getValue: () => {
                        const extensions = getExtensionElement(
                            element.businessObject,
                            "magic:BewitchedStartEvent"
                        );
                        return extensions ? extensions.spell : "";
                    },
                    setValue: (element, moddle, modeling, value) => {
                        const extensionElements =
                            element.businessObject.extensionElements ||
                            moddle.create("bpmn:ExtensionElements");

                        let bewitched = getExtensionElement(
                            element.businessObject,
                            "magic:BewitchedStartEvent"
                        );

                        if (!bewitched) {
                            bewitched = moddle.create("magic:BewitchedStartEvent");
                            extensionElements.get("values").push(bewitched);
                        }
                        bewitched.spell = value;

                        return modeling.updateProperties(element, {
                            extensionElements,
                        });
                    }
                })
            ] // spellProps(element)
        })
    }

    propertiesPanel.registerProvider(LOW_PRIORITY, this);
}

MagicPropertiesProvider.$inject = ['propertiesPanel', 'translate'];
