import { CollectionConfig } from 'payload/types';
import { nameDescFields } from '../../shared';

const MethodCategories: CollectionConfig = {
    slug: 'method-categories',
    admin: {
        useAsTitle: 'name',
        group: "Computation Methods"
    },
    fields: [
        ...nameDescFields,
    ],
}

export default MethodCategories;