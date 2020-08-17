import React from 'react'
import { mount, shallow } from 'enzyme'
import ReviewList from './ReviewList'
import type { Review } from './app'

describe('<ReviewList>', () => {
  const review: Review = {
    id: 1,
    username: 'テストユーザー',
    comment: 'この本はとても面白かったし学びも多い1冊でした。',
    like: 3
  }

  test('should return <ul> element', () => {
    const wrapper = shallow(<ReviewList reviews={[review]} />)
    expect(wrapper.is('.review__list')).toBe(true)
  })

  test('should return <li> element', () => {
    const wrapper = mount(<ReviewList reviews={[review]} />)
    expect(wrapper.find('.review__list__item').length).toBe(1)
  })

  test('should display username', () => {
    const wrapper = mount(<ReviewList reviews={[review]} />)
    expect(wrapper.find('.review__list__item__name').text()).toBe(`${review.username}さんの感想・評価`)
  })

  test('should display comment', () => {
    const wrapper = mount(<ReviewList reviews={[review]} />)
    expect(wrapper.find('.review__list__item__comment').text()).toBe(review.comment)
  })

  test('should display like count', () => {
    const wrapper = mount(<ReviewList reviews={[review]} />)
    expect(wrapper.find('.review__list__item__like__button').text()).toBe(`❤️ ${review.like}件`)
  })
})
