import { CollectionConfig } from 'payload/types';
import { nameDescFields } from '../../shared';

const ComputationMethods: CollectionConfig = {
    slug: 'methods',
    admin: {
        useAsTitle: 'name',
        group: "Computation Methods"
    },
    fields: [
        ...nameDescFields,
        {
            name: "category",
            type: 'relationship',
            relationTo: "method-categories"
        },
    ],
}

export default ComputationMethods;