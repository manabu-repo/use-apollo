import { users } from '../data'

export const userResolvers = {
  Query: {
    users: () => users,
  },
}
