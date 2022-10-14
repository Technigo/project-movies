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
    <div className="background" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}>
      <div className="movie-details">
        <div className="detail-container">
          <div className="go-back">
            <img src="/icons/backicon.svg" id="goback" alt="goback" />
            <button type="button" onClick={goBack}> Movies </button>
          </div>
          <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
          </div>
        </div>
        <div className="movie-description">
          <div className="movie-tittle">
            <h2>{movie.title}</h2>
            <div className="star-raiting">
              <img src="/icons/star.svg" alt="starraiting" />
              <h3>{Math.round(movie.vote_average * 10) / 10}</h3>
            </div>
          </div>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
