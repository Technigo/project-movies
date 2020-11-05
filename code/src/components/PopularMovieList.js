import React, {useEffect, useState } from 'react';

import { API_KEY  } from '../key';
import { PopularMovieCard } from './PopularMovieCard';

export const PopularMovieList = () => {
  const [movies, setMovies] = useState([]);

    useEffect(() => {
      const moviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
      fetch(moviesUrl)
          .then(res => res.json())
          .then(json => {
              setMovies(json.results)
            })
            .catch((error) => {
              console.error('Request failed', error)
            })
          }, []);

    return (
        <section className="movie-card-list">
          {movies.map((movie) => (
          <PopularMovieCard key= {movie.id} {...movie} />
        ))}
        </section> 
    );
  };