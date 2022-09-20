import { useQuery } from '@vue/apollo-composable'
import { GET_USERS } from '../schema/getUsers'

export const useUser = () => {
  const { result, loading, error } = useQuery(GET_USERS)

  return { result, loading, error }
}
