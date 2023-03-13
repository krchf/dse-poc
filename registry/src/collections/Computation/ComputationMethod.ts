import { CollectionConfig } from 'payload/types';
import { nameDescFields } from '../../shared';

const ComputationMethods: CollectionConfig = {
    slug: 'methods',
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        ...nameDescFields,
        {
            name: "category",
            type: 'relationship',
            relationTo: "method-categories"
        },
        {
            name: "inputs",
            type: "array",
            fields: [
                ...nameDescFields,
                {
                    name: "type",
                    type: "relationship",
                    relationTo: "types"
                }
            ]
        }
    ],
}

export default ComputationMethods;