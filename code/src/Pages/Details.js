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

// TO DO's in detail component:
// Show the full-screen image (the backdrop)
// Show the smaller poster to the left, add a little border to it
// Show the movie title
// Show the vote-rating, like: 7.5/10
// Show the movie description
// Create the back-button that should only show from the details page.
// Anything else?