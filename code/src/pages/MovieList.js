import React, { useEffect, useState, Link } from 'react';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import 'styles/movieList.css'

export const MovieList = ({apiKey, baseUrl, posterSize}) => {
  const [movies, setMovies] = useState([]);
  const MOVIES_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=de-DE&sort_by=popularity.desc&with_original_language=de`;

  useEffect(() => {
    fetch(MOVIES_URL)
    .then(res => res.json())
    .then(json => (
      setMovies(json.results)
    ))
  }, []);

  console.log(movies)

  return (
    <>
      <Header />
      <section className='movie-list'>
        {movies.map((movie) => (
          <a key={movie.id} href={`/movies/${movie.id}`}>
            <img src={baseUrl + posterSize + `${movie.poster_path}`}/>
            <div className='movie-details'>
              <h1>{movie.original_title}</h1>
              <p>Erschienen {movie.release_date}</p>
            </div>
          </a>
        ))}
      </section>
    </>
  )
};