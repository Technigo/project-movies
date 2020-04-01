import React, { useState, useEffect } from 'react';
import { MovieThumb } from './MovieThumb'
import { useParams } from 'react-router-dom';
  
export const SimilarMovies = () => {
  const {id} = useParams();
  const MOVIES_URL = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=1eadd8601c20e4a3ebe5e0eca940633f&language=en-US&page=1`;
  const [ movies, setMovies ] = useState([]);

  useEffect(() => {
    fetch(MOVIES_URL)
      .then(response => response.json())
      .then(json => setMovies(json.results))
  }, [MOVIES_URL, id]);
  
  return (
    <section className='movies-list'> 
      {movies.map(movie =>
          <MovieThumb {...movie} key={movie.id} />  
        )
      }
    </section>
  );
}