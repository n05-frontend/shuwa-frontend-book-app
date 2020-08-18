import React from 'react'
import { mount } from 'enzyme'
import ReviewList, { Item, Name, Comment, LikeButton } from './ReviewList'
import type { Review } from './app'

describe('<ReviewList>', () => {
  const review: Review = {
    id: 1,
    username: 'テストユーザー',
    comment: 'この本はとても面白かったし学びも多い1冊でした。',
    like: 3
  }

  test('should return <ReviewList> element', () => {
    const wrapper = mount(<ReviewList reviews={[review]} />)
    expect(wrapper.is(ReviewList)).toBe(true)
  })

  test('should return <Item> element', () => {
    const wrapper = mount(<ReviewList reviews={[review]} />)
    expect(wrapper.find(Item).length).toBe(1)
  })

  test('should display username', () => {
    const wrapper = mount(<ReviewList reviews={[review]} />)
    expect(wrapper.find(Name).text()).toBe(`${review.username}さんの感想・評価`)
  })

  test('should display comment', () => {
    const wrapper = mount(<ReviewList reviews={[review]} />)
    expect(wrapper.find(Comment).text()).toBe(review.comment)
  })

  test('should display like count', () => {
    const wrapper = mount(<ReviewList reviews={[review]} />)
    expect(wrapper.find(LikeButton).text()).toBe(`❤️ ${review.like}件`)
  })
})
