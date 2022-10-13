import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState([])
  const { id } = useParams()
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}popular?api_key=2248800ec8114dc953ca7e0362a1332b&language=en-US&page=1/`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
  }, [id])

  return (
    <section className="details-page">
      <div className="background-image">
        <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.tittle} />
        <button type="button" onClick={goBack}> Movies </button>
        <div className="movie-container">
          <img className="movie-poster" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
          <div className="movie-description">
            <h2>{movie.title}</h2>
            <h3>{Math.round(movie.vote_average * 10) / 10}</h3>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovieDetails;
