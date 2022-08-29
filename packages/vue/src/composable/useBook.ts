import { useQuery } from '@vue/apollo-composable'
import { GET_BOOKS } from '../schema/getBooks'

export const useBook = () => {
  const { result, loading, error } = useQuery(GET_BOOKS)

  // if (loading) return 'loading'
  // if (error) return 'error 😢'

  return result
}
