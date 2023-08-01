import { CollectionConfig } from 'payload/types';
import { nameDescFields } from '../shared';

const Models: CollectionConfig = {
    slug: 'models',
    admin: {
        useAsTitle: 'name',
    },
    upload: {
        staticURL: "/uploads",
        staticDir: "../uploads"
    },
    fields: [
        ...nameDescFields,
        // TODO relation to requirements
    ]
}

export default Models;