import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

export function useApolloClient() {
  return new ApolloClient({
    uri: 'http://localhost:4000/graphql/',
    cache: new InMemoryCache(),
  })
}
