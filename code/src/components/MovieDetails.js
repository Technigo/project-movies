import React from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
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

  const history = useHistory();

  const onButtBackClick = () => {
    history.goBack();
  };

  return (
    <div>
      <img
        className='back-img'
        src={`http://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
        alt={movie.title}
      />
      <Link to='/' className='back-button' onClick={onButtBackClick}>
        GO BACK
      </Link>

      <div className='summary' key={movie.original_title}>
        <img
          className='poster-img'
          src={`http://image.tmdb.org/t/p/w342${movie.poster_path}`}
          alt={movie.title}
        />
        <div className='movie-text'>
          <h1>
            {movie.original_title}
            <span className='vote'>{movie.vote_average}</span>
          </h1>
          <p>{movie.overview}</p>
          {/* <h3>Released {movie.release_date}</h3> */}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
