import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from './BackButton';
//import { API_URL } from 'utils/urls';

const Details = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=a90dcccc9047bfdf345615e2c530184c&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovieDetails(data);
        console.log(movieDetails);
      });
  }, []);

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
          <p>{movieDetails.overview}</p>
        </div>
      </div>
    </section>
  );
};

export default Details;
