/*Outer Dependencies*/
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/*Inner Dependencies*/
import { MovieThumb } from '../components/MovieThumb';

export const MovieList = () => {
  const [movies, setMovies] = useState([]);

  /*fetch for information on all 20 movies*/
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=f86cf72a5f604a49cde375a4fa2c6d61&language=en-US&page=1'
    )
      .then((res) => res.json())
      .then((json) => setMovies(json.results));
  }, []);

  return (
    <section className='movie-list-container'>
      {movies.map((movie) => (
        <Link key={movie.id} to={`/details/${movie.id}`}>
          <MovieThumb {...movie} />
        </Link>
      ))}
    </section>
  );
};
