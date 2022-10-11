import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Movie from './Movie'

const MovieApp = () => {
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=d96429e32bc0ad6087333ea9da61765c&language=en-US&page=1')
      .then((res) => res.json())
      .then((data) => setMovieList(data.results))
      .catch((error) => console.error(error))
      .finally(() => console.log(`the movielist: ${movieList}`))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const allMovies = movieList.map((movie) => {
    return (
      <Link key={movie.id} to={`/movie/${movie.id}`}>
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