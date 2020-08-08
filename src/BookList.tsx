import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import ReviewList from './ReviewList'
import type { Book, Review } from './app'

async function postReview(comment: string): Promise<Review> {
  return fetch('http://localhost:1323/reviews', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ comment })
  }).then<Review>(response => response.json())
}

function BookListItem({ book }: { book: Book }) {
  const [showReview, setShowReview] = useState(false)
  const [comment, setComment] = useState('')
  const [reviews, setReviews] = useState(book.reviews)

  const handleSubmit = async () => {
    const review = await postReview(comment)
    setReviews(reviews.concat([review]))
    setComment('')
  }

  return (
    <li key={book.id} className="book-list__item">
      <div className="book-list__item__inner">
        <img className="book-list__item__inner__image" src={book.image} alt={book.title} />
        <div className="book-list__item__inner__info">
          <h3 className="book-list__item__inner__info__title">
            {book.title}
            <span className="book-list__item__inner__info__title__author">
              ({book.author})
            </span>
          </h3>
          <p className="book-list__item__inner__info__overview">{book.overview}</p>
          <p className="book-list__item__inner__info__comment">
            <a href="#" className="book-list__item__inner__info__comment__link" onClick={() => { setShowReview(!showReview) }}>
              {reviews.length}件の感想・評価
            </a>
          </p>
        </div>
      </div>
      <CSSTransition in={showReview} timeout={200} classNames="review">
        <div className="review">
          <ReviewList reviews={reviews} />
          <form className="review__form" onSubmit={handleSubmit}>
            <textarea
              className="review__form__input"
              rows={5}
              placeholder={`「${book.title}」を読んだ感想・評価を教えてください`}
              onChange={(event) => setComment(event.currentTarget.value)}
              value={comment}
            ></textarea>
            <button className="review__form__submit" type="submit">投稿</button>
          </form>
        </div>
      </CSSTransition>
    </li>
  )
}

export default function BookList({ books }: { books: Book[] }) {
  return (
    <ul className="book-list">
      {books.map(book => <BookListItem key={book.id} book={book} />)}
    </ul>
  )
}
