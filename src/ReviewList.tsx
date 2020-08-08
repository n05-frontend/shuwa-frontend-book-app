import React, { useState } from 'react'
import type { Review } from './app'

function ReviewListItem({ review }: { review: Review }) {
  const [likeCount, setLikeCount] = useState(review.like)

  return (
    <li className="review__list__item">
      <p className="review__list__item__name">{review.username}さんの感想・評価</p>
      <p className="review__list__item__comment">{review.comment}</p>
      <p className="review__list__item__like">
        <a href="#" className="review__list__item__like__button" onClick={() => setLikeCount(likeCount + 1)}>
          &#x2764;️ {likeCount}件
        </a>
      </p>
    </li>
  )
}

export default function ReviewList({ reviews }: { reviews: Review[] }) {
  return (
    <ul className="review__list">
      {reviews.map(review => <ReviewListItem key={review.id} review={review} />)}
    </ul>
  )
}
