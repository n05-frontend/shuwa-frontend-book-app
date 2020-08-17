import React from 'react'
import { shallow } from 'enzyme'
import BookList from './BookList'
import type { Book } from './app'

describe('<BookList>', () => {
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

  test('should return <ul> element', () => {
    const wrapper = shallow(<BookList books={[book]} />)
    expect(wrapper.is('.book-list')).toBe(true)
  })
})
