import React from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { DETAILS_URL } from '../utils/urls';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetch(DETAILS_URL(movieId))
      .then((res) => res.json())
      .then((data) => {
        if (data.id) {
          setMovie(data);
        } else {
          setHasError(true);
        }
      })
      .catch(() => setHasError(true));
  }, [movieId]);

  const history = useHistory();

  const onButtBackClick = () => {
    history.push('/');
  };

  if (hasError) {
    return (
      <div>
        <p>Sorry this movie does not exist!</p>
        <button onClick={onButtBackClick}>Back to main</button>
      </div>
    );
  }

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
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
