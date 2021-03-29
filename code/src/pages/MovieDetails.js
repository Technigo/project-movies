import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const [details, setDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=f86cf72a5f604a49cde375a4fa2c6d61&language=en-US`
    )
      .then((res) => res.json())
      .then((json) => {
        setDetails(json);
      });
  }, [id]);

  return (
    <div className='details-container'>
      <img
        className='details-background-image'
        src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`}
        alt='backdrop'
      />
      <img
        className='details-poster'
        src={`https://image.tmdb.org/t/p/w780${details.poster_path}`}
        alt='poster'
      />
      <h1 className='details-title'>{details.original_title}</h1>
      <h2 className='details-rating'>{details.vote_average}/10</h2>
      <p className='details-overview'>{details.overview}</p>
    </div>
  );
};
