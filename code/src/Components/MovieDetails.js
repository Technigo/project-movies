import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export const MovieDetails = (movieList) => {
  const param = useParams()
  console.log(param)
  return (
    <p>Hello</p>
  )
}