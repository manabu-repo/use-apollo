import { books } from '../data'

export const bookResolvers = {
  Query: {
    books: () => books,
  },
}
