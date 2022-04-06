import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from './BackButton';
import { API_DETAILS } from 'utils/urls';

const Details = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    fetch(API_DETAILS(movieId))
      .then((res) => res.json())
      .then((data) => {
        setMovieDetails(data);
      });
  }, [movieId]);

  return (
    <section
      className='background-image'
      style={{
        backgroundImage: `url(
          https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path})`,
      }}
    >
      <BackButton />
      <div className='detail-movie-image-text-container'>
        <img
          className='detail-movie-image'
          src={`https://image.tmdb.org/t/p/w1280${movieDetails.poster_path}`}
          alt='movieposter'
        />
        <div className='detail-movie-text-container'>
          <h2 className='detail-movie-title'>{movieDetails.original_title}</h2>
          <span className='detail-movie-rating'>
            {movieDetails.vote_average}/10
          </span>
          <p className='detail-movie-text'>{movieDetails.overview}</p>
        </div>
      </div>
    </section>
  );
};

export default Details;
