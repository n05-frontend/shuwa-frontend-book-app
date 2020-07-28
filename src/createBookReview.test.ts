import $ from 'jquery'
import createBookReview from './createBookReview'
import { Review } from './app'

describe('createBookReview()', () => {
  const review: Review = {
    id: 1,
    username: 'テストユーザー',
    comment: 'この本はとても面白かったし学びも多い1冊でした。',
    like: 3
  }

  test('should return DOM element', () => {
    document.body.innerHTML = `<ul>${createBookReview(review)}</ul>`
    expect($('.review__list__item').length).toBe(1)
  })

  test('should match username', () => {
    document.body.innerHTML = `<ul>${createBookReview(review)}</ul>`
    expect($('.review__list__item__name').text()).toBe(`${review.username}さんの感想・評価`)
  })
})
