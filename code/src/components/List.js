import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from 'utils/urls';

export const List = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
  }, [])
  return (
    <section className="main">
      {movies.map((movie) => (
        <Link
          key={movie.id}
          to={`/details/${movie.id}`}
          alt={movie.title}>
          <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
          <div className="movie-info">
            <h1>{movie.title}</h1>
            <h2>Coming {movie.release_date}</h2>
          </div>
        </Link>
      ))}
    </section>
  )
}