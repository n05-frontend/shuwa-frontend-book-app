import React from 'react'
import ReviewList from './ReviewList'
import type { Book } from './app'

export default function BookList({ books }: { books: Book[] }) {
  return (
    <ul className="book-list">
      {books.map(book => (
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
                <a className="book-list__item__inner__info__comment__link">
                  {book.reviews.length}件の感想・評価
              </a>
              </p>
            </div>
          </div>
          <div className="review">
            <ReviewList reviews={book.reviews} />
            <form className="review__form">
              <textarea className="review__form__input" rows={5} placeholder={`「${book.title}」を読んだ感想・評価を教えてください`}></textarea>
              <button className="review__form__submit" type="submit">投稿</button>
            </form>
          </div>
        </li>
      ))}
    </ul>
  )
}
