import { CollectionConfig } from 'payload/types';
import { nameDescFields } from '../../shared';

const ServiceLevelIndicators: CollectionConfig = {
    slug: 'indicators',
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

export default ServiceLevelIndicators;