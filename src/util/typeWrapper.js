
import { GraphQLString, GraphQLObjectType } from 'graphql';

export const TypeWrapper = (DataType, name) => new GraphQLObjectType({
  name: `TypeWrapper${name || DataType.name}`,
  description: `TypeWrapper Graphql${name || DataType.name}`,
  fields: () => ({
    data: {
      type: DataType,
      resolve: obj => obj.data,
    },
    error: {
      type: GraphQLString,
      resolve: obj => obj.error,
    },
  }),
});

export const InputTypeWrapper = (DataType, name) => new GraphQLObjectType({
  name: `TypeWrapperInput${name || DataType.name}`,
  description: `TypeWrapper Graphql Input${name || DataType.name}`,
  fields: () => ({
    data: {
      type: DataType,
      resolve: obj => obj.data,
    },
    error: {
      type: GraphQLString,
      resolve: obj => obj.error,
    },
  }),
});


export default {
  InputTypeWrapper,
  TypeWrapper,
};
