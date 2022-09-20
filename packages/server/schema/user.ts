import { gql } from 'apollo-server'

export const userTypeDefs = gql`
type User {
  id: String
  name: String
  age: Int
  birth: String
}

type Query {
  users: [User]
}
`
