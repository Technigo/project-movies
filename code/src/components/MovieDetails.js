/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOVIEDETAILS_URL } from './urls';
import PopcornLoader from './PopcornLoader';
import { Trailer } from './Trailer';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);// this has to be true
    fetch(MOVIEDETAILS_URL(movieId))
      .then((res) => {
        if (!res.ok) {
          throw new Error('Movie not found');
        }
        return res.json();
      })
      .then((data) => {
        setMovieDetails(data);
      })
      .catch((e) => {
        console.error(e);
        navigate('/404');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId, navigate]);

  if (loading) {
    return (
      <div>
        <PopcornLoader />
      </div>
    );
  }

  return (
    <section alt={movieDetails.title} className="background-img" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path})` }}>
      <container className="all-info">
        {/* <img className="details-img" src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path} `} alt={movieDetails.title} /> */}
        <Trailer />
        <div className="movie-details">
          <h2>{movieDetails.title} <mark><span className="star">★</span> {Math.round(movieDetails.vote_average * 10) / 10}</mark></h2>
          <p className="movie-overview">{movieDetails.overview}</p>
          <p className="movie-runtime">{movieDetails.runtime} minutes</p>
        </div>
      </container>
    </section>
  )
}

export default MovieDetails;