import { useQuery } from '@apollo/client'
import { GET_BOOKS } from '../schema/getBooks'

interface Books {
  title: string
  author: string
}

function Book() {
  const { loading, error, data } = useQuery(GET_BOOKS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error 😢</p>

  return data.books.map(({ title, author }: Books) => (
    <div>
      <div>book: {title}</div>
      <span>author: {author}</span>
    </div>
  ))
}

export default Book
