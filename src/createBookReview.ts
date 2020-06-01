import type { Review } from './app'

export default function createBookReview(review: Review) {
  return (
    '<li class="review__list__item">' +
      '<p class="review__list__item__name">' + review.username + 'さんの感想・評価</p>' +
      '<p class="review__list__item__comment">' + review.comment + '</p>' +
      '<p class="review__list__item__like">' +
        '<a href="#" class="review__list__item__like__button js-like">' +
          '&#x2764;️ <span class="js-like-count">' + review.like + '</span>件' +
        '</a>' +
      '</p>' +
    '</li>'
  )
}
