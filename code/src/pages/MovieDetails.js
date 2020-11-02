import React from 'react'

import { useParams } from 'react-router-dom'


export const MovieDetails = () => {
  const {id} = useParams()
  // Why does id need to be in curlies?
  const params = useParams()
  console.log(id)
  console.log(params)

  return <p>This is the movie details for movie with id {id}</p>
}