import type { Book, Review } from './app'

export async function getBooks(): Promise<Book[]> {
  return fetch('http://localhost:1323/books')
    .then<Book[]>(response => response.json())
}

export async function postReview(comment: string): Promise<Review> {
  return fetch('http://localhost:1323/reviews', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ comment })
  }).then<Review>(response => response.json())
}
