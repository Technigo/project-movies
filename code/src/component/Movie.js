import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import 'component/movie.css'

export const Movie = () => {
  const [movie, setMovie] = useState()
  const { id } = useParams()
  
  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=5f9ddb234f53171b24352c9e5988b098&language=en-US`

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((json) => setMovie(json))
      .then(console.log(URL))
      .catch((error) => console.log(error))
  }, [URL]);

  if (!movie) {
    return <></>;
}

  return (
    <article>
      <h1>{movie.original_title}</h1>
      <p>{movie.overview}</p>
      <p>Movie budget: {movie.budget}</p>
      {/* <img className="movieImageSize" src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt={original_title} /> */}
    </article>
  )
}