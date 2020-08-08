import React from 'react'
import type { Book } from './app'

export default function BookList({ books }: { books: Book[] }) {
  return books.map(book => (
    <ul className="book-list">
      <li className="book-list__item">
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
      </li>
    </ul>
  ))
}
