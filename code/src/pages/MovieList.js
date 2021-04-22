import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { MOVIE_LIST_API, SIRI_LIST_API, IDA_LIST_API } from '../reusables/urls'

import { MovieCard } from '../components/MovieCard'
import { Search } from '../components/Search'

export const MovieList = () => {
  const [movies, setMovies] = useState([])
  const [sirisMovies, setSirisMovies] = useState([])
  const [idasMovies, setIdasMovies] = useState([])

  useEffect(() => {
    fetch(MOVIE_LIST_API)
      .then(res => res.json())
      .then(json => setMovies(json.results))
  },[])
  
  useEffect(() => {
    fetch(SIRI_LIST_API)
      .then(res => res.json())
      .then(json => setSirisMovies(json.items))
  },[])

  useEffect(() => {
    fetch(IDA_LIST_API)
      .then(res => res.json())
      .then(json => setIdasMovies(json.items))
  },[])

  return (
    <>
      <Search />
      <section className="movie-list-wrapper">
        <h2 className="list-title">Popular Movies</h2>
        <section className="movie-list">
          {movies.slice(0, 8).map(movie => (
            <Link key={movie.id} to={`/movies/${movie.id}`}>
              <MovieCard {...movie} />
            </Link>
          ))}
        </section>
        <h2 className="list-title">Siri's Favourites</h2>
        <section className="movie-list">
          {sirisMovies.map(movie => (
            <Link key={movie.id} to={`/movies/${movie.id}`}>
            <MovieCard {...movie} />
          </Link>
          ))}
        </section>
        <h2 className="list-title">Ida's Favourites</h2>
        <section className="movie-list">
          {idasMovies.map(movie => (
            <Link key={movie.id} to={`/movies/${movie.id}`}>
            <MovieCard {...movie} />
          </Link>
          ))}
        </section>
      </section>
    </>
  )
}