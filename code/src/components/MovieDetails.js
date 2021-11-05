import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { DETAILS_URL } from '../utils/urls';

const MovieDetails = () => {
  const [details, setDetails] = useState({});

  const { info } = useParams();

  useEffect(() => {
    fetch(DETAILS_URL(info))
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        console.log('DETAILS API INFO HERE ', data);
      });
  }, [info]);

  const history = useHistory();

  const onBackToStart = () => {
    history.push('/');
  };

  return (
    <>
      <div
        className="details-container"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${details.backdrop_path})`,
        }}
      >
        <button className="back-button" onClick={onBackToStart}>
          &#10094; Movies
        </button>

        <div className="details-wrapper">
          <img
            className="details-img"
            src={`https://image.tmdb.org/t/p/w342${details.poster_path}`}
            alt="poster of the movie"
          />
          <span className="text-summary">
            <h1>{details.title}</h1> <p>Rating: {details.vote_average}/10</p>
            <p>{details.overview}</p>
          </span>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
