import { CollectionConfig } from 'payload/types';
import { nameDescFields } from '../../shared';

const DataTypes: CollectionConfig = {
  slug: 'types',
  admin: {
    useAsTitle: 'name',
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
    {
      name: "availableFormats",
      type: "relationship",
      relationTo: "formats",
      hasMany: true,
    }
    // {
    //   name: "availableFormats",
    //   type: "array",
    //   fields: [
    //     ...nameDescFields,
    //     {
    //       name: "version",
    //       type: "text"
    //     }
    //   ]
    // }
  ],
}

export default DataTypes;