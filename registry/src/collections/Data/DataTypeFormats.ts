import { CollectionConfig } from 'payload/types';
import { nameDescFields } from '../../shared';

const DataFormats: CollectionConfig = {
  slug: 'formats',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    ...nameDescFields,
    {
      name: "dataType",
      type: "relationship",
      relationTo: "types"
    },
    {
      name: "version",
      type: "text"
    },
  ],
}

export default DataFormats;