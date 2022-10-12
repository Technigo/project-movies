import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({})
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/760161??api_key=d7ebb1544b11b5a98ffd2c23bb80dd3b&language=en-US')
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
      <div>
        <p>This is details</p>
        <h2>{movie.title}</h2>
        <button type="button" onClick={goBack}>Movies</button>
      </div>
      <div>
        <img className="movie-backdrop" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
      </div>
    </>
  )
}

export default MovieDetails;