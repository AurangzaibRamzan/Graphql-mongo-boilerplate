import { GraphQLObjectType, GraphQLString } from 'graphql';

const logsType = new GraphQLObjectType({
  name: 'user',
  description: 'user data',
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: obj => obj.id,
    },
    name: {
      type: GraphQLString,
      resolve: obj => obj.name,
    },
    createdAt: {
      type: GraphQLString,
      resolve: obj => obj.createdAt && new Date(obj.createdAt).toISOString(),
    },
    updatedAt: {
      type: GraphQLString,
      resolve: obj => obj.updatedAt && new Date(obj.updatedAt).toISOString(),
    },
    deletedAt: {
      type: GraphQLString,
      resolve: obj => obj.deletedAt && new Date(obj.deletedAt).toISOString(),
    },
  }),
});

export default logsType;
