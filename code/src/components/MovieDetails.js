import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOVIEDETAILS_URL } from './urls';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(MOVIEDETAILS_URL(movieId))
      .then((res) => res.json())
      .then((data) => setMovieDetails(data))
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }, [movieId]);

  const onGoBackButtonClick = () => {
    navigate(-1);
  }

  if (loading) {
    return (
      <div className="loader">
        <p>wait a damn minute</p>
      </div>
    );
  }
  return (
    <div>
      <h2>{movieDetails.title}</h2>
      <p>{movieDetails.overview}</p>
      {/* <p>{movieDetails.genre}</p> */}
      <p>{movieDetails.runtime} minutes</p>
      <img className="details-img" src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path} `} alt={movieDetails.title} />
      <button type="button" onClick={onGoBackButtonClick}>Go Back</button>
    </div>)
}

export default MovieDetails;

