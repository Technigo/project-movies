import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { DETAILS_URL } from '../utils/urls';

const MovieDetails = () => {
  const [details, setDetails] = useState({});

  const { info } = useParams();

  useEffect(() => {
    fetch(DETAILS_URL(info))
      .then((res) => res.json())
      .then((json) => {
        setDetails(json);
        console.log('DETAILS API INFO HERE ', json);
      });
  }, [info]);

  return (
    <div
      className="details-container"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${details.backdrop_path})`,
      }}
    >
      <div className="details-wrapper">
        <img
          className="details-img"
          src={`https://image.tmdb.org/t/p/w342${details.poster_path}`}
          alt="poster of the movie"
        />
        <span className="text-summary">
          {info} <h1>{details.title}</h1> <p>rating: {details.vote_average}</p>
          <p>{details.overview}</p>
        </span>
      </div>
    </div>
  );
};

export default MovieDetails;
