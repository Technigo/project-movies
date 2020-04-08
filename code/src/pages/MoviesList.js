import React, { useState, useEffect } from 'react';
import { MovieThumb } from '../components/MovieThumb';

export const MoviesList = ({ category }) => {
  const MOVIES_URL = `https://api.themoviedb.org/3/movie/${category}?api_key=1eadd8601c20e4a3ebe5e0eca940633f&language=en-US&page=1`;
  const [ movies, setMovies ] = useState([]);

  useEffect(() => {
    fetch(MOVIES_URL)
      .then(response => response.json())
      .then(json => setMovies(json.results))
  }, [MOVIES_URL]);
 
  return (
    <section className='movies-list'> 
      {movies.map(movie =>
          <MovieThumb {...movie} key={movie.id} />  
        )
      }
    </section>
  );
}