import { gql } from "@apollo/client"
// import gql from 'graphql-tag'

export const GET_BOOKS = gql`
  query getBooks {
    books {
      title
      author
    }
  }
`
