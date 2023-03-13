import { CollectionConfig } from 'payload/types';
import { baseDataTypeAttribute, nameDescFields } from '../../shared';

const QuantitativeDataTypeAttributes: CollectionConfig = {
  slug: 'quantitative-attributes',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    ...baseDataTypeAttribute,
    {
      name: "optimizationTarget",
      type: "radio",
      options: [
        "MIN",
        "MAX"
      ]
    },
  ],
}

export default QuantitativeDataTypeAttributes;