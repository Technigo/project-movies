/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../details.css';

// Define the Details component
const Details = () => {
  // Get the id parameter from the URL using the useParams hook
  const { id } = useParams();
  // Define state for the movie details, initialized as an empty object
  const [movieDetail, setMovieDetail] = useState({});

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=39168ef639d8a2d49b6d7a9893ad1b8c&language=en-US`)
      .then((data) => data.json())
      .then((configuredData) => setMovieDetail(configuredData))
  }, [id]);

  return (
    <div className="backdrop-overlay">
      {/* The ternary operator checks if the image paths property of the movieDetail object is truthy (i.e., not undefined, null, 0, false, etc.). If it is truthy, it
      sets the src attribute of the imgtag to the URL of the image file. If it is falsy, it sets the src` attribute to an empty string. */}
      <img className="backdrop" src={movieDetail.backdrop_path ? `https://image.tmdb.org/t/p/w1280${movieDetail.backdrop_path}` : ''} alt={movieDetail.title} />
      <a className="goBackBtn" href="/"><svg className="goback-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z" fill="#fff" fillRule="evenodd" /></svg><span className="backBtnName">Movies</span></a>
      <div className="movie-details-container">
        <div className="poster-rating-container">
          <img className="poster" src={movieDetail.poster_path ? `https://image.tmdb.org/t/p/w342/${movieDetail.poster_path}` : ''} alt={movieDetail.title} />
          <div className="title-rating-text">
            <h2 className="title-rating-container">
              <span className="title-details title-details-margin">{movieDetail.title}</span>
              <span className="rating">⭐{Math.round(movieDetail.vote_average * 10) / 10}</span>
            </h2>
            <p className="movie-description">{movieDetail.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;