/* eslint-disable no-return-assign */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Loading } from 'components/Loading';

export const Details = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  const navigate = useNavigate();
  const onGoBackButtonClick = () => {
    navigate(-1);
  };

  const API_URL = `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=dfb43b39df4efba7f1f4678ddc567fa1&language=en-US&page=1`;

  useEffect(() => {
    setIsLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => setMovie(json))
      .finally(() => setIsLoading(false));
  }, [API_URL]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div
      className="movie-details-wrapper"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backgroundBlendMode: 'overlay'
      }}>
      <button type="button" onClick={onGoBackButtonClick} className="back-button">
        Back
      </button>
      <div className="movie-details">
        <div className="image-wrapper">
          <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
        </div>

        <div className="detail-wrapper">
          <h2>{movie.title}</h2>
          <div className="movie-info">
            <p>⭐️ {Math.round(movie.vote_average * 10) / 10} on IMDB</p>
            <p>
              {movie.genres && (
                <div className="genres">
                  <span className="genre-title">Genre:</span>{' '}
                  {movie.genres.length === 2
                    ? movie.genres.map((genre) => genre.name).join(' & ')
                    : movie.genres.map((genre) => genre.name).join(', ')}
                </div>
              )}
            </p>
          </div>
          <p className="overview">{movie.overview}</p>
          <span className="released">Release date: {movie.release_date}</span>
          <button
            className="imdb-button"
            type="button"
            onClick={() => (window.location.href = `https://www.imdb.com/title/${movie.imdb_id}/`)}>
            Go to IMDb page
          </button>
        </div>
      </div>
    </div>
  );
};
