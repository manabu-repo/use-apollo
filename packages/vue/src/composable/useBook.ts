import { useQuery } from '@vue/apollo-composable'
import { GET_BOOKS } from '../schema/getBooks'
import { watch } from 'vue'

export const useBook = () => {
  const { result, loading, error } = useQuery(GET_BOOKS)

  return { result, loading, error }
}
