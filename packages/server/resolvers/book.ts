import { books } from '../data/book'

export const resolvers = {
  Query: {
    books: () => books,
  },
}
