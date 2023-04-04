/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MovieTrailers from './MovieTrailers';

import Arrowicon from '../images/left-icon.svg'

const Moviedetails = () => {
  const [movie, setMovie] = useState({})
  const navigate = useNavigate()
  const { movieId } = useParams()

  const homeButton = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=b6486ef7752f2120246f9cab35f64ece&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
  }, [movieId])
  console.log(movie)
  const rate = movie.vote_average;

  return (
    <section
      className="details-page"
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}>
      <button type="button" onClick={homeButton}><img src={Arrowicon} alt="left arrow" className="left-arrow" /><p>Back to movie list!</p></button>
      <div className="movie-card">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className="text-details">
          <h2>{movie.title}</h2>
          <h3>{movie.tagline}</h3>
          <h4>Release-date: {movie.release_date}</h4>
          <h4> Rating: ⭐ {Number(rate?.toFixed(1))}</h4>
          <article>
            {movie.overview}
          </article>
        </div>
        <MovieTrailers />
      </div>
    </section>
  )
}

export default Moviedetails;