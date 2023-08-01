import { CollectionConfig } from 'payload/types';
import { cardinalities, nameDescFields } from '../../shared';

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
      required: true
    },
    {
      name: "kind",
      type: "radio",
      options: ["quantitative", "qualitative"],
      defaultValue: "quantitative",
      required: true
    },
    {
      name: "values",
      type: "array",
      fields: [{
        name: "option",
        type: "text",
        required: true
      }],
      admin: {
        condition: (data) => data.kind === "qualitative"
      }
    },
    {
      name: "unit",
      type: "text",
      admin: {
        condition: (data) => data.kind === "quantitative"
      }
    },
    ...cardinalities,
  ],
}

export default Attributes;