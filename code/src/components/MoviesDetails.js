/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DETAILS_URL } from '../data/Url';

export const MoviesDetails = () => {
  const [ movie, setMovie ] = useState()
  const navigate = useNavigate();
  const { movieId } = useParams()

  const onBackButtonClick = () => {
    navigate(-1)
  }

  useEffect(() => {
    fetch(DETAILS_URL(movieId))
        .then((res) => res.json())
        .then((json) => {
        setMovie(json)
          })
      }, [movieId])
      console.log(movie)

  return (
      <section className="movie-container">
      {movie && (
        <>
        <div className="background">
        <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.title} />
        </div>
        <button className="back-button" type='button∑' onClick={(onBackButtonClick)}>Back</button>
        <p>{movie.title}</p>
        <span className="tagline">{movie.tagline}
        </span>
        <div className="poster">
        <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
        </div>
        <span className="overview">{movie.overview}
        </span>
        <span className="rating">{Math.round(movie.vote_average * 10) / 10}
        </span>
        <span className="length">{movie.runtime} min
        </span>
        </>
        )}
        </section>
    )
}