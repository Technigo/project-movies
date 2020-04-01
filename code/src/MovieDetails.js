import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetails = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=8470fd181cec36bb64fcc0377f8eb255&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        setMovie(json)
      })
  }, [movieId])


  return (
    <div>
      {movie.map((movie) => (
        <div key={movie.original_title}>
          <h1>
            {movie.original_title}
          </h1>
        </div>
      )
      )}
    </div>
  )
}