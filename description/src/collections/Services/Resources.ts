import { CollectionConfig } from 'payload/types';
import { nameDescFields } from '../../shared';

const Resources: CollectionConfig = {
    slug: 'resources',
    admin: {
        useAsTitle: 'name',
        group: "Services"
    },
    fields: [
        ...nameDescFields,
        {
            name: "unit",
            type: "text",
        }
    ],
}

export default Resources;