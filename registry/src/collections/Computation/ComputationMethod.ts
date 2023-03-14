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
        // {
        //     name: "data",
        //     type: "array",
        //     fields: [
        //         {
        //             name: "data",
        //             type: "relationship",
        //             relationTo: "method-data"
        //         }
        //     ]
        // }
    ],
}

export default ComputationMethods;