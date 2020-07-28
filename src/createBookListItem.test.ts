import $ from 'jquery'
import createBookListItem from './createBookListItem'
import { Book } from './app'

describe('createBookListItem()', () => {
  const book: Book = {
    id: 1,
    title: 'フロントエンド開発',
    author: '執筆太郎',
    overview: 'フロントエンド開発をこれから始める方に最適な1冊です',
    image: 'https://example.com/image.png',
    reviews: [
      {
        id: 1,
        username: '匿名ユーザー1',
        comment: 'スムーズに開発することができました！',
        like: 12
      },
      {
        id: 2,
        username: '匿名ユーザー2',
        comment: '楽しく読ませてもらいました。',
        like: 0
      }
    ]
  }

  test('should return DOM element', () => {
    document.body.innerHTML = `<ul>${createBookListItem(book)}</ul>`
    expect($('.book-list__item').length).toBe(1)
  })

  test('should match title & author', () => {
    document.body.innerHTML = `<ul>${createBookListItem(book)}</ul>`
    expect($('.book-list__item__inner__info__title').text()).toBe(`${book.title}(${book.author})`)
  })

  test('should match overview', () => {
    document.body.innerHTML = `<ul>${createBookListItem(book)}</ul>`
    expect($('.book-list__item__inner__info__overview').text()).toBe(book.overview)
  })
})
