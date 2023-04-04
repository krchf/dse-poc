import { addGroup } from '../utils';
import spellProps from './parts/SpellProps';

const LOW_PRIORITY = 500;

export default function MagicPropertiesProvider(propertiesPanel, translate) {
    this.getGroups = (element: unknown) => {
        return addGroup(element, {
            id: 'magic',
            label: 'Magic properties',
            type: "bpmn:StartEvent",
            entries: spellProps(element)
        })
    }

    propertiesPanel.registerProvider(LOW_PRIORITY, this);
}

MagicPropertiesProvider.$inject = ['propertiesPanel', 'translate'];
