import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { MovieListWrapper, MovieCover, HoverCoverBackground, MovieDescription } from './styles'

const MovieList = () => {
  const [movies, setMovies] = useState([])
  const apiKey = "34f303052aebcecccf74022a56b92eee"

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
      .then(res => res.json())
      .then(json => setMovies(json.results))
  }, [])

  return (
    <MovieListWrapper>
      {movies.map(movie => (
        <Link style={{ width: "25%" }} to={`/movies/${movie.id}`}>
          <MovieCover key={movie.id}>
            <img style={{ width: "100%" }} src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} />
            <HoverCoverBackground>
              <MovieDescription>
                <h1>{movie.title}</h1>
                <p>Released {movie.release_date}</p>
              </MovieDescription>
            </HoverCoverBackground>
          </MovieCover>
        </Link>
      ))}
    </MovieListWrapper>
  )
}

export default MovieList
