import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import { InputTypeWrapper } from '../util/typeWrapper';
import UserResolver from '../resolvers/user';
import UserType from '../types/userType';


export default new GraphQLObjectType({
  name: 'mutations',
  description: '...',
  fields: () => ({
    testMutation: {
      type: GraphQLString,
      args: {
        name: {
          type: GraphQLString,
        },
      },
      resolve: (obj, args) => {
        return `Mutation working ${args.name}`;
      },
    },
    addUser: {
      type: InputTypeWrapper(UserType),
      args: {
        name: {
          type: GraphQLString,
        },
      },
      resolve: (obj, args) => {
        return UserResolver.createUser(args);
      },
    },
  }),
});
