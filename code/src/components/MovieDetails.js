import React, { useEffect, useState } from 'react'

export const MovieDetails = () => {
  const movieUrlDetails = 'https://api.themoviedb.org/3/list/7063718?api_key=18fb720a795c179526f7b480bba674dd' 
  //I need to change this API key to the correct one
  const [movieDetails, setMovieDetails] = useState([])

  useEffect(() => {
  fetch(movieUrlDetails)
    .then(response => response.json())
    .then(json => setMovieDetails(json.items))
  }, [])
  return (
    <section className='Movie-thumb'>
      {/* background */}
      <img alt={movieDetails.title} className='detail-movie-img'/>
    <h1>{movieDetails.title}</h1>
    <p>{movieDetails.overview}</p>
    <p>{movieDetails.vote_average}</p>

    </section>
  )

}