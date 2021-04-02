import React, { useEffect, useState } from 'react'

import { MovieListItems } from '../components/MovieListItems'

export const MovieList = () => {
  const MOVIES_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=f8d93b3169765fb54ceb97a483ec4821&language=en-US&page=1'
  const [movieList, setMovieList] = useState([])
    
  useEffect(() => {
    fetch(MOVIES_URL)
      .then((response) => response.json())
      .then((json) => setMovieList(json.results))
  },[])

  return (
    <section className='movie-list'>
      {movieList.map((movie) => (
        <MovieListItems {...movie} />
      ))}
    </section>
  )
}