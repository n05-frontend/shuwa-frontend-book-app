import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BookList from './BookList'
import { getBooks } from './api'
import type { Book } from './app'

const Page = styled.div`
  margin: 0 auto;
  width: 700px;
`

export const Title = styled.h2`
  font-size: 1.8rem;
`

export default function Timeline() {
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    getBooks().then(books => setBooks(books))
  }, [])

  return (
    <Page>
      <Title>タイムライン</Title>
      <BookList books={books} />
    </Page>
  )
}
