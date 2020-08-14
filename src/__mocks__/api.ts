import type { Book } from '../app'

export const dummyBooks: Book[] = [
  {
    id: 1,
    title: 'フロントエンド開発',
    author: '執筆太郎',
    overview: 'フロントエンド開発をこれから始める方に最適な1冊です',
    image: 'https://example.com/front-end.png',
    reviews: []
  },
  {
    id: 2,
    title: 'バックエンド開発',
    author: '執筆太郎',
    overview: 'バックエンド開発をこれから始める方に最適な1冊です',
    image: 'https://example.com/back-end.png',
    reviews: []
  }
]

export async function getBooks(): Promise<Book[]> {
  return dummyBooks
}
