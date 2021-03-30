import React, { useEffect, useState } from 'react'

import './MovieList.css'

import { MovieCard } from '../components/MovieCard'

export const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=bf4522dc489e8ffdfd36be08819077b1&language=en-US&page=1')
      .then(res => res.json())
      .then(json => setMovies(json.results))
      .catch(err => console.err(err))
  },[])

  return (
    <section className="movie-list-wrapper">
      {movies.map(movie => <MovieCard {...movie} />)}
    </section>
  )

}