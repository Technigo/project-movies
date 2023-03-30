/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const Details = () => {
  const { movieName } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    console.log(movieDetails);
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
      <button className="back-btn" type="button" onClick={() => navigate('/')}>
        Go Back
      </button>
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
              <h3 className="details-overview">{movieDetails.overview}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
