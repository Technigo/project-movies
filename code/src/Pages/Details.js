import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Details = () => {
  const { detailsId } = useParams()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${detailsId}?api_key=3d84d8a2e7d9f4fcf68bb05afb8dd7ef&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
      })
  }, [detailsId])

  return (
    <div>Movie details in progress... <span role="img" aria-label="movie emoji">&#127909;</span></div>
  )
}

// the movie emoji in span is just me being tired and silly :)
