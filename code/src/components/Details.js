/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../details.css';

// Define the Details component
const Details = () => {
  // Get the movieId parameter from the URL using the useParams hook
  const { movieId } = useParams();
  // Define state for the movie details, initialized as an empty object
  const [movie, setMovie] = useState({});
  const API_URL_MOVIE_DETAILS = `https://api.themoviedb.org/3/movie/${movieId}api_key=39168ef639d8a2d49b6d7a9893ad1b8c&language=en-US`;

  // Define state for the movie details, initialized as an empty object
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(API_URL_MOVIE_DETAILS);
        const data = await res.json();
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, [API_URL_MOVIE_DETAILS]);

  return (
    <div className="backdrop-overlay">
      {movie.backdrop_path ? (
        <img className="backdrop" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}api_key=39168ef639d8a2d49b6d7a9893ad1b8c&language=en-US`} alt={movie.title} />
      ) : (
        <img className="backdrop" src="https://via.placeholder.com/1280x720" alt="Backdrop placeholder" />
      )}
      <a className="goBackBtn" href="/"><svg className="goback-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z" fill="#fff" fillRule="evenodd" /></svg><p>Movies</p></a>
      <div className="movie-details-container">
        <div className="poster-rating-container">
          {movie.poster_path ? (
            <img className="poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}api_key=39168ef639d8a2d49b6d7a9893ad1b8c&language=en-US`} alt={movie.title} />
          ) : (
            <img className="poster" src="https://via.placeholder.com/352x465" alt="Poster placeholder" />
          )}
          <div className="title-rating-text">
            <h2 className="title-details title-details-margin">{movie.title}Movie title</h2>
            <h2 className="rating">{Math.round(movie.vote_average * 10) / 10} Rating goes here</h2>
            <p className="movie-description">{movie.overview}Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, assumenda soluta nisi accusantium a quo eligendi ducimus optio! Odio velit nulla officiis molestiae ducimus ratione libero tempora cumque illum ullam?</p>
          </div>
        </div>
        <div className="details-container">
          <div className="overview-text">{movie.overview}</div>
        </div>
      </div>
    </div>
  );
};

export default Details;