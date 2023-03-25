/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Details = () => {
//   const params = useParams();
  const { id } = useParams()
  const [movie, setMovie] = useState({})

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=35a0fb6f5f3fde8a6e6cf4ca489b902a&language=en-US`)
      .then((response) => response.json())
      .then((json) => {
        setMovie(json)
        console.log("fetch ID", movie)
      })
  }, [id]);

  const navigate = useNavigate();
  useEffect(() => {
    // console.log(id);
  });
  const goBack = () => {
    navigate(-1);
  }
  return (
    <div className="backdrop-container">
      <button type="button" onClick={goBack}> 👈🏼 Movies </button>
      <img className="backdrop" src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.title} />

      <div className="overview-container">
        <img className="poster" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />

        <div className="details-container">
          <div className="title-rating-text">
            <h3 className="title-details"> {movie.title} <span className="rating">⭐️{Math.round(movie.vote_average * 10) / 10}/10 </span> </h3>
          </div>

          <div className="overview-text">{movie.overview}</div>
        </div>
      </div>
    </div>
  );
}

export default Details;

// url for movie-details: https://api.themoviedb.org/3/movie/{movie_id}?api_key={api_key}&language=en-US
// https://api.themoviedb.org/3/movie/550?api_key=35a0fb6f5f3fde8a6e6cf4ca489b902a
