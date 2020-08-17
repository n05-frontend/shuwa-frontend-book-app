import React, { useEffect, useState } from 'react'
import BookList from './BookList'
import { getBooks } from './api'
import type { Book } from './app'

export default function Timeline() {
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    getBooks().then(books => setBooks(books))
  }, [])

  return (
    <div className="page">
      <h2 className="page__title">タイムライン</h2>
      <BookList books={books} />
    </div>
  )
}
