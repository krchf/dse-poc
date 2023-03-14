import { CollectionConfig } from 'payload/types';
import { nameDescFields, resourceSelectionFields, serviceLevelObjective, serviceLocation } from '../../shared';

const DataServices: CollectionConfig = {
    slug: 'data-services',
    admin: {
        useAsTitle: 'name',
        group: "Services"
    },
    fields: [
        ...nameDescFields,
        serviceLocation,
        {
            name: "type",
            type: "relationship",
            relationTo: "types"
        },
        // TODO constraints
        {
            name: "resourceConsumption",
            type: "array",
            fields: resourceSelectionFields(false)
        },
        {
            name: "objectives",
            type: "array",
            fields: [
                ...serviceLevelObjective
            ]
        }
    ],
}

export default DataServices;