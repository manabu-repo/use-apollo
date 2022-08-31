import { ApolloServer, gql } from 'apollo-server'
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'

import { bookTypeDefs, userTypeDefs } from './schema'
import { bookResolvers } from './resolvers'

const typeDefs = bookTypeDefs
// console.log('defs', typeDefs)

const resolvers = bookResolvers

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  plugins: [
    ApolloServerPluginLandingPageLocalDefault({ embed: true }),
  ],
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
