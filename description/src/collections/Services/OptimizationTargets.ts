import { CollectionConfig } from 'payload/types';
import { nameDescFields } from '../../shared';

const OptimizationTarget: CollectionConfig = {
    slug: 'optimization-targets',
    admin: {
        useAsTitle: 'name',
        group: "Services"
    },
    fields: [
        ...nameDescFields,
        {
            name: "attribute",
            type: "relationship",
            relationTo: "attributes"
        },
        {
            name: "goal",
            type: "radio",
            options: ["minimize", "maximize"]
        }
    ],
}

export default OptimizationTarget;