import React from 'react'
import { shallow } from 'enzyme'
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
})
