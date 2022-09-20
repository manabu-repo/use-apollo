import { ApolloServer, gql } from 'apollo-server'
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'

import { bookTypeDefs, userTypeDefs } from './schema'
import { bookResolvers, userResolvers } from './resolvers'

const server = new ApolloServer({
  typeDefs: [bookTypeDefs, userTypeDefs],
  resolvers: [bookResolvers, userResolvers],
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
