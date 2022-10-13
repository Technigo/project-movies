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
  }, [movieId]);

  const goBack = () => {
    navigate(-1);
  }

  return (
    <>
      <img className="background-img" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
      <div className="details-wrapper">
        <button className="back-button" type="button" onClick={goBack}>Movies</button>
        <div className="movie-details">
          <img className="details-img" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
          <div className="details-text">
            <div className="text-box">
              <h2>{movie.title}</h2>
              <h3 className="rating">&#11088; {movie.vote_average}/10</h3>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default MovieDetails;