import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import { Sorting } from '../components/Sorting'
import { Loading } from '../components/Loading'

export const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [sortMovie, setSortMovie] = useState('popular')
  const [loading, setLoading] = useState(false)

  const MOVIE_URL = `https://api.themoviedb.org/3/movie/${sortMovie}?api_key=dbc6417f14d69bcdf76f3599707a6abd&language=en-US&page=1`;


  useEffect(() => {
    setLoading(true)
    fetch(MOVIE_URL)
      .then(res => res.json())
      .then((json) => {
        setTimeout(() => {
          setLoading(false)
          setMovieList(json.results)
        }, 1000)
      })
  }, [sortMovie])


  return (
    <>
      <Sorting 
        sortMovie={sortMovie}
        onSortChange={setSortMovie} />
      {loading && <Loading />}
      <div className="movielist-container">
        {movieList.map((movie) => (
          <Link key={movie.id} to={`/movies/${movie.id}`} className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} className="movie-image"/>
            <div className="movie-card-text">
              <h1 className="movie-title">{movie.title}</h1>
              <h2 className="release-title">Released {movie.release_date}</h2>
            </div>
          </Link>
        ))}
      </div>
    </>
  )

}
