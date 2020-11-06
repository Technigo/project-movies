import React, { useEffect, useState } from 'react'

import { MovieThumb } from 'components/MovieThumb'
import { Footer } from 'components/Footer'

import './MovieList.css'

export const MovieList = () => {
  const baseURL = 'https://api.themoviedb.org'
  const listID = '7063718'
  const apiKey = '18fb720a795c179526f7b480bba674dd'
  const movieUrl = `${baseURL}/3/list/${listID}?api_key=${apiKey}`
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(movieUrl)
      .then(response => response.json())
      .then(json => setMovies(json.items))
  }, [movieUrl])
  return (
    <>
      <section className='movie-wrapper'>
        {movies.map(movie => (
          <MovieThumb key={movie.id} {...movie} />
        ))}
      </section>
      <Footer />
    </>
  )
}