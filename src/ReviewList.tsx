import React, { useState } from 'react'
import styled from 'styled-components'
import type { Review } from './app'

export const Item = styled.li`
  border-bottom: 1px solid #d6d6d6;
  font-size: 1rem;
  padding: 15px 0;
`

export const Name = styled.p`
  margin: 0;
`

export const Comment = styled.p`
  margin: 5px 0 0;
`

const Like = styled.p`
  margin: 10px 0 0;
  text-align: right;
`

export const LikeButton = styled.a`
  color: #000;
  display: inline-block;
  text-decoration: none;
  &:hover {
    color: #F43C3C;
  }
`

function ReviewListItem({ review }: { review: Review }) {
  const [likeCount, setLikeCount] = useState(review.like)

  return (
    <Item>
      <Name>{review.username}さんの感想・評価</Name>
      <Comment>{review.comment}</Comment>
      <Like>
        <LikeButton href="#" onClick={() => setLikeCount(likeCount + 1)}>
          &#x2764;️ {likeCount}件
        </LikeButton>
      </Like>
    </Item>
  )
}

const List = styled.ul`
  border-top: 1px solid #d6d6d6;
  list-style: none;
  margin-top: 20px;
  padding: 0;
`

export default function ReviewList({ reviews }: { reviews: Review[] }) {
  return (
    <List>
      {reviews.map(review => <ReviewListItem key={review.id} review={review} />)}
    </List>
  )
}
