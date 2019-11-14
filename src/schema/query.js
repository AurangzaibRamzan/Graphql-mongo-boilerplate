import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql';

import { TypeWrapper } from '../util/typeWrapper';
import UserResolver from '../resolvers/user';
import UserType from '../types/userType';

export default new GraphQLObjectType({
  name: 'Query',
  description: 'Queries',
  fields: () => ({
    testQuery: {
      type: GraphQLString,
      args: {
        name: {
          type: GraphQLString,
        },
      },
      resolve: (obj, args) => {
        return `Query working ${args.name}`;
      },
    },
    users: {
      type: TypeWrapper(new GraphQLList(UserType), 'UserList'),
      resolve: () => UserResolver.loadUsers(),
    },
  }),
});
