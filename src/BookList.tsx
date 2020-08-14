import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'
import ReviewList from './ReviewList'
import { postReview } from './api'
import type { Book } from './app'

export const Item = styled.li`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.3);
  margin-top: 30px;
  padding: 30px;
`

const ItemInner = styled.div`
  display: flex;
`

export const Image = styled.img`
  display: block;
  flex-basis: 148px;
  margin-right: 20px;
`

const Info = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  justify-content: space-between;
`

export const Title = styled.h3`
  font-size: 1.4rem;
  margin: 0;
`

const Author = styled.span`
  font-size: 1.1rem;
`

export const Overview = styled.p`
  color: #666;
  font-size: 0.8rem;
  margin: 0;
`

const Comment = styled.p`
  font-size: 1rem;
  margin: 0;
  text-align: right;
`

export const Link = styled.a`
  color: #000;
  text-decoration: underline;
`

export const ReviewForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px 0 0;
`

export const ReviewInput = styled.textarea`
  border-color: #d6d6d6;
  border-radius: 3px;
  box-sizing: border-box;
  font-size: 1rem;
  margin: 0;
  padding: 8px;
  width: 100%;
`

export const ReviewSubmit = styled.button`
  background-color: #0ae;
  border: 0;
  border-radius: 3px;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 10px;
  padding: 10px 0;
  width: 100%;
`

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
    <Item>
      <ItemInner>
        <Image src={book.image} alt={book.title} />
        <Info>
          <Title>
            {book.title}
            <Author>({book.author})</Author>
          </Title>
          <Overview>{book.overview}</Overview>
          <Comment>
            <Link
              href="#"
              onClick={() => {
                setShowReview(!showReview)
              }}
            >
              {reviews.length}件の感想・評価
            </Link>
          </Comment>
        </Info>
      </ItemInner>
      <CSSTransition in={showReview} timeout={200} classNames="review">
        <div className="review">
          <ReviewList reviews={reviews} />
          <ReviewForm>
            <ReviewInput
              rows={5}
              placeholder={`「${book.title}」を読んだ感想・評価を教えてください`}
              onChange={(event) => setComment(event.currentTarget.value)}
              value={comment}
            ></ReviewInput>
            <ReviewSubmit onClick={handleSubmit} type="button">
              投稿
            </ReviewSubmit>
          </ReviewForm>
        </div>
      </CSSTransition>
    </Item>
  )
}

const List = styled.ul`
  padding: 0;
  list-style: none;
`

export default function BookList({ books }: { books: Book[] }) {
  return (
    <List>
      {books.map((book) => (
        <BookListItem key={book.id} book={book} />
      ))}
    </List>
  )
}
