import { CollectionConfig } from 'payload/types';
import { nameDescFields, resourceSelection, serviceLevelObjective, serviceLocation, valueSpecification } from '../../shared';

const FunctionalServices: CollectionConfig = {
    slug: 'functional-services',
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        ...nameDescFields,
        serviceLocation,
        {
            name: "method",
            type: "relationship",
            relationTo: "methods",
            required: true
        },
        {
            name: "inputs",
            type: "array",
            fields: [
                {
                    name: "input",
                    type: "relationship",
                    relationTo: "method-data",
                    filterOptions: ({ data }) => {
                        return {
                            method: { equals: data["method"] },
                            kind: { equals: "input" }
                        }
                    },
                },
                {
                    name: "format",
                    type: "relationship",
                    relationTo: "formats",
                    // TODO filtering: "input"->"type" 
                    // filterOptions: ({data}) => ({
                    //     type: { equals: data}
                    // })
                },
                {
                    name: "constraints",
                    type: 'array',
                    fields: [
                        {
                            name: "attribute",
                            type: 'relationship',
                            relationTo: ["quantitative-attributes", "qualitative-attributes"]
                            // TODO filtering
                        },
                        {
                            name: "operator",
                            type: "select",
                            options: [
                                {
                                    label: "=",
                                    value: "EQ"
                                },
                                {
                                    label: ">",
                                    value: "GT"
                                }
                            ]
                        },
                        ...valueSpecification
                        // {
                        //     name: "valueSpecification",
                        //     type: "radio",
                        //     options: ["absolute", "referenced"]
                        // },
                        // {
                        //     name: "value",
                        //     // TODO differentiate between qualitative and quantitative
                        //     type: "text",
                        //     admin: {
                        //         condition: (data, siblingData) => (siblingData.valueSpecification === "absolute")
                        //     }
                        // },
                        // {
                        //     name: "value",
                        //     type: "group",
                        //     fields: inputAttributeSelection,
                        //     admin: {
                        //         condition: (data, siblingData) => (siblingData.valueSpecification === "referenced")
                        //     }
                        // }
                    ]
                }
            ],
            admin: {
                condition: (data) => data["method"]
            }
        },
        // {
        //     name: "outputs",
        //     type: "relationship",
        //     relationTo: "method-data",
        //     filterOptions: ({ siblingData }) => {
        //         return {
        //             method: { equals: siblingData["method"] },
        //             kind: { equals: "output" }
        //         }
        //     },
        //     admin: {
        //         condition: (data) => data["method"]
        //     }
        // },
        {
            name: "exceptions",
            type: 'array',
            fields: [
                ...nameDescFields,
            ]
        },
        {
            name: "resourceConsumption",
            type: "array",
            fields: resourceSelection
        },
        {
            name: "objectives",
            type: "array",
            fields: [
                ...serviceLevelObjective
            ]
        }
    ],
}

export default FunctionalServices;