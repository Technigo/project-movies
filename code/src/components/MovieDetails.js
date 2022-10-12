import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { SINGLE_MOVIE_URL } from '../data/urls';
import 'css/movieDetails.css'

export const MovieDetails = () => {
  const [movie, setMovie] = useState()
  // const [movie, setMovie] = useState()
  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(SINGLE_MOVIE_URL(movieId))
      .then((res) => res.json())
      .then((json) => setMovie(json))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId])

  const PreviousPage = () => {
    navigate(-1);
  }

  return (
    <section className="detailsContainer">
      {movie && (
        <div className="background" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}>
          <div className="summary">
            <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
            <div className="details">
              <h1>
                <span className="title">{movie.title}</span>
                <span className="rating">{Math.round(movie.vote_average * 10) / 10}</span>
              </h1>
              <p>{movie.overview}</p>
              <button type="button" onClick={PreviousPage}> Go Back </button>
            </div>
          </div>
        </div>)}
    </section>
  );
}