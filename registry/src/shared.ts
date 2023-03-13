import { Field } from "payload/types";

export const nameDescFields: Field[] = [
    {
        name: "name",
        type: "text",
        required: true,
    },
    {
        name: "description",
        type: "textarea",
        required: false,
    },
];

export const cardinalities: Field[] = [
    {
        name: "minCardinality",
        type: "number",
        defaultValue: 1
    },
    {
        name: "maxCardinality",
        type: "number",
        defaultValue: 1
    }
]

export const baseDataTypeAttribute: Field[] = [
    ...nameDescFields,
    ...cardinalities
]

// export const forService: Field = {
//     name: "forService",
    
// }