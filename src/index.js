import { ApolloServer } from 'apollo-server';
import connectDatabase from './dbConnection';

import schema from './schema';

connectDatabase();

const server = new ApolloServer({ schema });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
