import React from 'react'
import type { Review } from './app'

export default function ReviewList({ reviews }: { reviews: Review[] }) {
  return (
    <ul className="review__list">
      {reviews.map(review => (
        <li key={review.id} className="review_list__item">
          <p className="review__list__item__name">{review.username}さんの感想・評価</p>
          <p className="review__list__item__comment">{review.comment}</p>
          <p className="review__list__item__like">
            <a className="review__list__item__like__button">
              &#x2764;️ {review.like}件
            </a>
          </p>
        </li>
      ))}
    </ul>
  )
}
