import { CollectionConfig } from 'payload/types';
import { nameDescFields } from '../../shared';

const DataFormats: CollectionConfig = {
  slug: 'formats',
  admin: {
    useAsTitle: 'name',
    group: "Data"
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