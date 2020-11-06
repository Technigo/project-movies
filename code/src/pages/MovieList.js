import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import 'styles/movieList.css';

export const MovieList = ({apiKey, baseUrl, posterSize}) => {
  const [movies, setMovies] = useState([]);
  const MOVIES_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=de-DE&sort_by=popularity.desc&with_original_language=de`;

  useEffect(() => {
    fetch(MOVIES_URL)
    .then(res => res.json())
    .then(json => (
      setMovies(json.results)
    ))
  }, [MOVIES_URL]);

  return (
    <>
      <Header />
      <section className='movie-list'>
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <img src={baseUrl + posterSize + `${movie.poster_path}`} alt={`${movie.original_title}`}/>
            <div className='movie-details'>
              <h1>{movie.original_title}</h1>
              <p>Released {movie.release_date}</p>
            </div>
          </Link>
        ))}
      </section>
      <Footer />
    </>
  )
};
