import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({})
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=d7ebb1544b11b5a98ffd2c23bb80dd3b&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        setMovie(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [movieId]);

  const goBack = () => {
    navigate(-1);
  }

  return (
    <>
      <img className="movie-backdrop" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
      <button className="goBackBtn" type="button" onClick={goBack}>Movies</button>
      <div className="movie-info">
        <img className="movie-poster-details" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className="movie-title-rating">
          <h2 className="movie-title">{movie.title}</h2>
          <h2>Rating: {movie.vote_average}/10</h2>
        </div>
        <p className="movie-description">{movie.overview}</p>
      </div>
    </>
  )
}

export default MovieDetails;