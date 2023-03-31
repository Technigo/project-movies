/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import backIcon from '..back-icon.png';

export const Details = () => {
  const { movieName } = useParams();
  const Params = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    console.log(movieDetails);
    console.log(Params);
    fetch(
      `https://api.themoviedb.org/3/movie/${movieName}?api_key=c939c336f6593e65481de7c928e9c092&language=en-US`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setMovieDetails(json);
      });
    // eslint-disable-next-line
  }, [movieName]);

  const handleNextMovie = () => {
    navigate(`/details/${Number(movieName) + 1}`);
  };

  return (
    <div className="big-component">
      <img
        className="backdrop-img"
        src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
        alt={movieDetails.title}
      />
      <div className="back-btn-container">
        <button
          className="back-btn"
          type="button"
          onClick={() => navigate('/')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 150 150"
            fill="#ffffff"
          >
            <path d="M12.14,0H32.8h29.43h28.8h19.71c3.34,0,6.38,1.37,8.58,3.56c2.2,2.2,3.56,5.24,3.56,8.58v7.13v57.25v7.09 c0,3.34-1.37,6.38-3.56,8.58c-2.2,2.2-5.24,3.56-8.58,3.56h-19.2c-0.16,0.03-0.33,0.04-0.51,0.04c-0.17,0-0.34-0.01-0.51-0.04 H62.74c-0.16,0.03-0.33,0.04-0.51,0.04c-0.17,0-0.34-0.01-0.51-0.04H33.31c-0.16,0.03-0.33,0.04-0.51,0.04 c-0.17,0-0.34-0.01-0.51-0.04H12.14c-3.34,0-6.38-1.37-8.58-3.56S0,86.95,0,83.61v-7.09V19.27v-7.13C0,8.8,1.37,5.76,3.56,3.56 C5.76,1.37,8.8,0,12.14,0L12.14,0z M55.19,31.24l20.53,14.32c0.32,0.2,0.61,0.48,0.84,0.81c0.92,1.33,0.58,3.14-0.74,4.06 L55.37,64.57c-0.5,0.41-1.15,0.66-1.85,0.66c-1.62,0-2.93-1.31-2.93-2.93V33.63h0.01c0-0.58,0.17-1.16,0.52-1.67 C52.05,30.64,53.87,30.32,55.19,31.24L55.19,31.24z M93.95,79.45V89.9h16.78c1.73,0,3.3-0.71,4.44-1.85 c1.14-1.14,1.85-2.71,1.85-4.44v-4.16H93.95L93.95,79.45z M88.1,89.9V79.45H65.16V89.9H88.1L88.1,89.9z M59.31,89.9V79.45H35.73 V89.9H59.31L59.31,89.9z M29.87,89.9V79.45H5.85v4.16c0,1.73,0.71,3.3,1.85,4.44c1.14,1.14,2.71,1.85,4.44,1.85H29.87L29.87,89.9z M5.85,73.6H32.8h29.43h28.8h26V22.2h-26h-28.8H32.8H5.85V73.6L5.85,73.6z M88.1,16.35V5.85H65.16v10.49H88.1L88.1,16.35z M93.95,5.85v10.49h23.07v-4.2c0-1.73-0.71-3.3-1.85-4.44c-1.14-1.14-2.71-1.85-4.44-1.85H93.95L93.95,5.85z M59.31,16.35V5.85 H35.73v10.49H59.31L59.31,16.35z M29.87,16.35V5.85H12.14c-1.73,0-3.3,0.71-4.44,1.85c-1.14,1.14-1.85,2.71-1.85,4.44v4.2H29.87 L29.87,16.35z" />
          </svg>
          BACK TO MOVIES
        </button>
      </div>
      <div className="small-component">
        <div className="details-row">
          <div className="details-container">
            <img
              className="poster-img"
              src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
            <div className="details-text">
              <div className="top-text">
                <h3 className="details-title">{movieDetails.title}</h3>
                <h3 className="details-score">{movieDetails.vote_average}</h3>
              </div>
              <p className="details-overview">{movieDetails.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
