import { CollectionConfig } from 'payload/types';
import { baseDataTypeAttribute, nameDescFields } from '../../shared';

const QualitativeDataTypeAttributes: CollectionConfig = {
  slug: 'qualitative-attributes',
  admin: {
    useAsTitle: 'name',
    group: "Data"
  },
  fields: [
    ...baseDataTypeAttribute,
    {
      name: "values",
      type: "array",
      fields: [{
        name: "option",
        type: "text",
        required: true
      }]
    }
  ],
}

export default QualitativeDataTypeAttributes;