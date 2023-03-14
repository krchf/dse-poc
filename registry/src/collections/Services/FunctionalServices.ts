import payload from 'payload';
import { CollectionConfig } from 'payload/types';
import { nameDescFields } from '../../shared';

const FunctionalServices: CollectionConfig = {
    slug: 'functional-services',
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        ...nameDescFields,
        {
            name: "method",
            type: "relationship",
            relationTo: "methods"
        },
        {
            name: "inputs",
            // type: "array",
            // fields: [{
            //     name: "methodInput",
            //     type: "text",
            // }],

            // TODO switch to filtered references?
            type: "relationship",
            relationTo: "method-data",
            filterOptions: ({ siblingData }) => {
                // console.log(obj)
                return {
                    method: {
                        equals: siblingData["method"]
                    }
                }
            }
        }
    ],
}

export default FunctionalServices;