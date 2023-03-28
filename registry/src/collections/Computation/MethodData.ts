import { CollectionConfig } from 'payload/types';
import { cardinalities, nameDescFields } from '../../shared';

const MethodData: CollectionConfig = {
    slug: 'method-data',
    admin: {
        useAsTitle: 'name',
        group: "Computation Methods",
        listSearchableFields: ["name", "method"]
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
            options: ["input", "output"],
            defaultValue: "input"
        },
        {
            name: "type",
            type: "relationship",
            relationTo: "types"
        },
        ...cardinalities
    ],
}

export default MethodData;