import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { DETAILS_URL } from '../utils/urls';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetch(DETAILS_URL(movieId))
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [movieId]);

  return (
    <div>
      <div key={movie.original_title}>
        <img
          className='back-img'
          src={`http://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
          alt={movie.title}
        />
        <img
          className='poster-img'
          src={`http://image.tmdb.org/t/p/w1280${movie.poster_path}`}
          alt={movie.title}
        />

        <h1>{movie.original_title}</h1>
        <h3>Released {movie.release_date}</h3>
        <p>{movie.overview}</p>
        <p>{movie.vote_average}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
