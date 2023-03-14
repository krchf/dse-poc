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

export const inputAttributeSelection: Field[] = [
    {
        name: "input",
        type: "relationship",
        relationTo: "method-data",
        filterOptions: ({data}) => ({
            // only works where "method"-attribute is defined at top-level!
            method: data["method"]
        })
    },
    {
        name: "attribute",
        type: "relationship",
        relationTo: "attributes", //["quantitative-attributes", "qualitative-attributes"],
        // TODO filter on input.type
        // filterOptions: 
        admin: {
            condition: (data, siblingData) => siblingData["input"]
        }
    }
]

export function valueSpecificationFields(canReference: boolean): Field[] {
    const res = [];
    if (canReference) {

        res.push(
            {
                name: "valueSpecification",
                type: "radio",
                options: ["absolute", "reference"]
            },
            )
        }
            
    res.push(

        {
            name: "value",
            type: "number",
        admin: {
            condition: (data, siblingData) => siblingData["valueSpecification"] == "absolute",
        }
    },
    )

    if (canReference) {
        res.push(

            {
                name: "value",
                type: "group",
                fields: inputAttributeSelection,
                admin: {
                    condition: (data, siblingData) => siblingData["valueSpecification"] == "reference"
                }
            }
        )
    }

    return res;
}

export function resourceSelectionFields(canReference: boolean): Field[] {
    return [
        {
            name: "resource",
            type: "relationship",
            relationTo: "resources"
        },
        ...valueSpecificationFields(canReference)
    ]
}

export const serviceLevelObjective: Field[] = [
    {
        name: "indicator",
        type: "relationship",
        relationTo: "indicators"
    },
    {
        name: "min",
        type: "number",
    },
    {
        name: "max",
        type: "number"
    }
]

export const serviceLocation: Field = {
    name: "location",
    type: "text",
}

// export const dynamicResourceConsumption

// export const forService: Field = {
//     name: "forService",
    
// }