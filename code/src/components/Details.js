/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const apiKey = 'd4669261ce30d2ac76f238d73f4bd890';

const Details = () => {
  const [movie, setMovie] = useState({});
  const [ready, setReady] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const API_URL = `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${apiKey}&language=en-US&page=1`;

  useEffect(() => {
    setReady(true);
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => setMovie(json))
      .catch((error) => console.error(error))
      .finally(() => setReady(false));
  }, []);

  const goBack = () => {
    navigate(-1);
  };
  if (ready) {
    return <p>Something is loading. Import Loader here</p>;
  }

  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
      }}
      className="movie-details-wrapper">
      <div className="movie-details">
        <div className="image-wrapper">
          <button className="back-button" type="button" onClick={goBack}>
            {' '}
            Movies{' '}
          </button>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div>
          <p className="vote-average">⭐️{movie.vote_average}</p>
          <p>{movie.title}</p>
          <p>{movie.runtime} minutes</p>
          <p>{movie.overview}</p>
          <span>Released {movie.release_date}</span>
        </div>
      </div>
    </div>
  );
};

export default Details;
