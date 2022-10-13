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
      <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.title} />
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <h2>{movie.title}</h2>
      <h3>{movie.vote_average}/10</h3>
      <p>{movie.overview}</p>
      <button type="button" onClick={goBack}>Movie list</button>
    </>
  )
}
export default MovieDetails;