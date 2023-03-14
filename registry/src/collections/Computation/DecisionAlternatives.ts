import { CollectionConfig } from 'payload/types';
import { nameDescFields } from '../../shared';

const Approaches: CollectionConfig = {
    slug: 'approaches',
    admin: {
        useAsTitle: 'name',
        group: "Computation Methods"
    },
    fields: [
        ...nameDescFields,
    ],
}

export default Approaches;