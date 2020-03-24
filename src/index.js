import { ApolloServer } from 'apollo-server';
import connectDatabase from './dbConnection';

import schema from './schema';
const PORT = process.env.port || 4000
connectDatabase();

const server = new ApolloServer({
  schema, introspection: true,
  playground: true,
});

server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}:${PORT}`);
});
