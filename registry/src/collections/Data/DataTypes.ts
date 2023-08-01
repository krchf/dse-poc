import { CollectionConfig } from 'payload/types';
import { nameDescFields } from '../../shared';

const DataTypes: CollectionConfig = {
  slug: 'types',
  admin: {
    useAsTitle: 'name',
    group: "Data"
  },
  fields: [
    ...nameDescFields,
  ],
}

export default DataTypes;