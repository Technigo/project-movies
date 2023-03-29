import React, { useEffect, useState } from 'react';
import { useParams /* , useNavigate */ } from 'react-router-dom';
import { MOVIEDETAILS_URL } from './urls';
import Header from './Header';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  const { movieId } = useParams();
  // const navigate = useNavigate();

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

  // const onGoBackButtonClick = () => {
  //   navigate(-1);
  // }

  if (loading) {
    return (
      <div className="loader">
        <p>wait a damn minute</p>
      </div>
    );
  }

  return (
    <section alt={movieDetails.title} className="background-img" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path})` }}>
      <Header />
      <container className="all-info">
        <img className="details-img" src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path} `} alt={movieDetails.title} />
        <div className="movie-details">
          <h2>{movieDetails.title} <mark><span className="star">★</span> {Math.round(movieDetails.vote_average * 10) / 10}</mark></h2>
          <p>Overview: {movieDetails.overview}</p>
          <p>Released: {movieDetails.release_date}</p>
          <p>Runtime: {movieDetails.runtime} minutes</p>
        </div>
        {/* <button type="button" onClick={onGoBackButtonClick}>
        <img src="/logos/arrow.png" alt="go-back-button" />
      </button> */}
      </container>
    </section>
  )
}

export default MovieDetails;

