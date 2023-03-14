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
    {
      name: "attributes",
      type: "relationship",
      relationTo: [
        "quantitative-attributes",
        "qualitative-attributes"
      ],
      hasMany: true
    },
  ],
}

export default DataTypes;