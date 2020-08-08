import React, { useEffect, useState } from 'react'
import BookList from './BookList'
import type { Book } from './app'

export default function Timeline() {
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    fetch('http://localhost:1323/books')
      .then<Book[]>(response => response.json())
      .then(books => setBooks(books))
  }, [])

  return (
    <div className="page">
      <h2 className="page__title">タイムライン</h2>
      <BookList books={books} />
    </div>
  )
}
