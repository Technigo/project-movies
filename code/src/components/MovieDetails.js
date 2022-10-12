import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState([])
  const { movieId } = useParams()
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}popular?api_key=2248800ec8114dc953ca7e0362a1332b&language=en-US&page=1/`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
  }, [movieId])

  return (
    <section className="details-page">
      <button type="button" onClick={goBack}> Go Back </button>
      <div className="movie-container">
        <img className="detail-image" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
        <div className="movie-description">
          <h2>{movie.tittle}</h2>
          <p>{movie.overview}</p>
        </div>
      </div>
    </section>
  );
}

export default MovieDetails