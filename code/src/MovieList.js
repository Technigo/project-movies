import React, { useState, useEffect } from 'react';
import { apiKey } from './Key';
import { Link } from 'react-router-dom';

import './movielist.css';

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const MOVIES_API = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

  useEffect(() => {
    fetch(MOVIES_API)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setMovies(data.results)
      });
  }, []);

  return (
    <div className='movie-list'>
      {movies.map((movie) => (
        <Link to={`/movies/${movie.id}`} key={movie.id} className='movie-container'>
          <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} className="list-img" />
          <div className='movie-info'>
            <h3 className='movie-name'>{movie.title}</h3>
            <p className='release-text'>Releasedate: {movie.release_date}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};


