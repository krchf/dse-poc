/* tslint:disable */
/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    formats: Format;
    'quantitative-attributes': QuantitativeAttribute;
    'qualitative-attributes': QualitativeAttribute;
    types: Type;
    'method-categories': MethodCategory;
    'method-data': MethodDatum;
    methods: Method;
    'functional-services': FunctionalService;
  };
  globals: {};
}
export interface User {
  id: string;
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  loginAttempts?: number;
  lockUntil?: string;
  createdAt: string;
  updatedAt: string;
  password?: string;
}
export interface Format {
  id: string;
  name: string;
  description?: string;
  dataType?: string | Type;
  version?: string;
  createdAt: string;
  updatedAt: string;
}
export interface Type {
  id: string;
  name: string;
  description?: string;
  attributes?:
    | (
        | {
            value: string;
            relationTo: 'quantitative-attributes';
          }
        | {
            value: string;
            relationTo: 'qualitative-attributes';
          }
      )[]
    | (
        | {
            value: QuantitativeAttribute;
            relationTo: 'quantitative-attributes';
          }
        | {
            value: QualitativeAttribute;
            relationTo: 'qualitative-attributes';
          }
      )[];
  createdAt: string;
  updatedAt: string;
}
export interface QuantitativeAttribute {
  id: string;
  name: string;
  description?: string;
  minCardinality?: number;
  maxCardinality?: number;
  optimizationTarget?: 'MIN' | 'MAX';
  createdAt: string;
  updatedAt: string;
}
export interface QualitativeAttribute {
  id: string;
  name: string;
  description?: string;
  minCardinality?: number;
  maxCardinality?: number;
  values: {
    option: string;
    id?: string;
  }[];
  createdAt: string;
  updatedAt: string;
}
export interface MethodCategory {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}
export interface MethodDatum {
  id: string;
  name: string;
  description?: string;
  method?: string | Method;
  kind?: 'input' | 'output';
  type?: string | Type;
  createdAt: string;
  updatedAt: string;
}
export interface Method {
  id: string;
  name: string;
  description?: string;
  category?: string | MethodCategory;
  createdAt: string;
  updatedAt: string;
}
export interface FunctionalService {
  id: string;
  name: string;
  description?: string;
  method?: string | Method;
  inputs?: string | MethodDatum;
  outputs?: string | MethodDatum;
  createdAt: string;
  updatedAt: string;
}
