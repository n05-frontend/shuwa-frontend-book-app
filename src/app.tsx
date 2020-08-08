import React from 'react'
import ReactDOM from 'react-dom'
import Timeline from './Timeline'

export type Book = {
  id: number
  title: string
  author: string
  overview: string
  image: string
  reviews: Review[]
}

export type Review = {
  id: number
  username: string
  comment: string
  like: number
}

const root = document.getElementById('react-root')
ReactDOM.render(<Timeline />, root)
