import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const API_KEY = '39168ef639d8a2d49b6d7a9893ad1b8c';
  const API_URL_MOVIE_DETAILS = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}c&language=en-US`;
  // const API_URL_MOVIE_IMAGE = `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`;

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

  const navigate = useNavigate();
  useEffect(() => {
  });
  const goBack = () => {
    navigate(-1);
  }

  return (
    <div className="backdrop-container">
      <button type="button" onClick={goBack}> Movies </button>
      <img className="backdrop" src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.title} />

      <div className="overview-container">
        <img className="poster" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />

        <div className="details-container">
          <div className="title-rating-text">
            <h2 className="title-details"> {movie.title}</h2>
          </div>

          <div className="overview-text">{movie.overview}</div>
        </div>
      </div>
    </div>
  );
};

export default Details;