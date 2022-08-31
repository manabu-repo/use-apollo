import { gql } from 'apollo-server'

export const bookTypeDefs = gql`
# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

type Book {
  title: String
  author: String
}

type Query {
  books: [Book]
}
`
