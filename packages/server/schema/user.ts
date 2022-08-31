import { gql } from 'apollo-server'

export const userTypeDefs = gql`
type User {
  id: String
  name: String
  age: Number
}

type Query {
  users: [User]
}
`
