import React from 'react';
import { Link } from 'react-router-dom';
import Movie from './Movie'

const MovieApp = ({ movieList }) => {
  const allMovies = movieList.map((movie) => {
    return (
      <Link className="movie" key={movie.id} to={`/movie/${movie.id}`}>
        <Movie
          movieTitle={movie.title}
          releaseDate={movie.release_date}
          moviePoster={movie.poster_path} />
      </Link>
    )
  })

  return (
    <section className="movie-wrapper">
      {allMovies}
    </section>

  )
}

export default MovieApp;