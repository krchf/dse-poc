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
      name: "version",
      type: "text"
    }
  ],
}

export default DataFormats;