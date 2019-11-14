import { GraphQLSchema } from 'graphql';

import QuerySchema from './query';
import MutationSchema from './mutation';

const schema = new GraphQLSchema({
  query: QuerySchema,
  mutation: MutationSchema,
});

export default schema;
