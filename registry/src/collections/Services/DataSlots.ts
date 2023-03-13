import { CollectionConfig } from 'payload/types';
import { cardinalities, nameDescFields } from '../../shared';

const DataSlots: CollectionConfig = {
    slug: 'slots',
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        ...nameDescFields,
        ...cardinalities,
        {
            name: "format",
            type: 'relationship',
            relationTo: "formats"
        }
    ],
}

export default DataSlots;