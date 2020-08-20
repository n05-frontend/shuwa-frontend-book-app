import React from 'react'
import { mount } from 'enzyme'
import BookList, { Item, Title, Overview, Image, Link, ReviewForm, ReviewInput, ReviewSubmit } from './BookList'
import ReviewList from './ReviewList'
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

  test('should return <BookList> element', () => {
    const wrapper = mount(<BookList books={[book]} />)
    expect(wrapper.is(BookList)).toBe(true)
  })

  test('should return <Item> element', () => {
    const wrapper = mount(<BookList books={[book]} />)
    expect(wrapper.find(Item).length).toBe(1)
  })

  test('should display title & author', () => {
    const wrapper = mount(<BookList books={[book]} />)
    expect(wrapper.find(Title).text()).toBe(`${book.title}(${book.author})`)
  })

  test('should display overview', () => {
    const wrapper = mount(<BookList books={[book]} />)
    expect(wrapper.find(Overview).text()).toBe(book.overview)
  })

  test('should display image URL', () => {
    const wrapper = mount(<BookList books={[book]} />)
    expect(wrapper.find(Image).prop('src')).toBe(book.image)
  })

  test('should display review count', () => {
    const wrapper = mount(<BookList books={[book]} />)
    expect(wrapper.find(Link).text()).toBe(`${book.reviews.length}件の感想・評価`)
  })

  test('should return <ReviewList>', () => {
    const wrapper = mount(<BookList books={[book]} />)
    expect(wrapper.find('.review').contains(<ReviewList reviews={book.reviews} />)).toBe(true)
  })

  test('should display form elements', () => {
    const wrapper = mount(<BookList books={[book]} />)
    expect(wrapper.find(ReviewForm).contains(ReviewInput)).toBe(true)
    expect(wrapper.find(ReviewForm).contains(ReviewSubmit)).toBe(true)
  })
})
