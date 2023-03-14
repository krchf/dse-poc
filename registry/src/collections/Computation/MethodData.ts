import { CollectionConfig } from 'payload/types';
import { nameDescFields } from '../../shared';

const MethodData: CollectionConfig = {
    slug: 'method-data',
    admin: {
        useAsTitle: 'name',
        group: "Computation Methods"
    },
    fields: [
        ...nameDescFields,
        {
            name: "method",
            type: "relationship",
            relationTo: "methods"
        },
        {
            name: "kind",
            type: "radio",
            options: ["input", "output"]
        },
        {
            name: "type",
            type: "relationship",
            relationTo: "types"
        }
    ],
}

export default MethodData;