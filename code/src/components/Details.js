import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Loading } from 'components/Loading';

export const Details = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  const API_URL = `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=dfb43b39df4efba7f1f4678ddc567fa1&language=en-US&page=1`;

  const navigate = useNavigate();
  const onGoBackButtonClick = () => {
    navigate(-1);
  };

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
    <div>
      <h2>{movie.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
      <button type="button" onClick={onGoBackButtonClick}>
        Go Back
      </button>
    </div>
  );
};
