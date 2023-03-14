import { buildConfig } from 'payload/config';
import path from 'path';

import Users from './collections/Users';
import DataTypes from './collections/Data/DataTypes';
import DataFormats from './collections/Data/DataTypeFormats';
import QuantitativeDataTypeAttributes from './collections/Data/QuantitativeDataTypeAttributes';
import QualitativeDataTypeAttributes from './collections/Data/QualitativeDataTypeAttributes';
import ComputationMethods from './collections/Computation/ComputationMethod';
import MethodCategories from './collections/Computation/ComputationMethodCategory';
import FunctionalServices from './collections/Services/FunctionalServices';
import MethodData from './collections/Computation/MethodData';
import Resources from './collections/Services/Resources';
import ServiceLevelIndicators from './collections/Services/ServiceLevelIndicators';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    // Add Collections here
    DataFormats,
    QuantitativeDataTypeAttributes,
    QualitativeDataTypeAttributes,
    DataTypes,

    MethodCategories,
    MethodData,
    ComputationMethods,

    Resources,
    ServiceLevelIndicators,
    FunctionalServices
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
