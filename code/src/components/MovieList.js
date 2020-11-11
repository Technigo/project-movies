import React, { useState, useEffect } from 'react'

import { MovieCard } from './MovieCard'

export const MovieList = () => {
  const [topMovies, setTopMovies] = useState([]); 
  //We use [] in the Use state hook since it will be returning an array
  useEffect(() => {
    const MOVIE_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=3bc84b0ae751d27c186bde28023ce8fe&language=en-us&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
    fetch(MOVIE_URL)
      .then((response) => response.json())
      .then((json) => setTopMovies(json.results))
  }, [])

  return (
    <div className='movie-list-card'>
      {topMovies.map((movie) => <MovieCard key= {movie.id} {...movie} /> )}
    </div> 
  )     
}
