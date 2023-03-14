import { CollectionConfig } from 'payload/types';
import { baseDataTypeAttribute, cardinalities, nameDescFields } from '../../shared';

const Attributes: CollectionConfig = {
  slug: 'attributes',
  admin: {
    useAsTitle: 'name',
    group: "Data"
  },
  fields: [
    ...nameDescFields,
    {
      name: "type",
      type: "relationship",
      relationTo: "types",
    },
    {
      name: "kind",
      type: "radio",
      options: ["quantitative", "qualitative"]
    },
    {
      name: "values",
      type: "array",
      fields: [{
        name: "option",
        type: "number",
        required: true
      }],
      admin: {
        condition: (data) => data.kind === "qualitative"
      }
    },
    ...cardinalities,
  ],
}

export default Attributes;