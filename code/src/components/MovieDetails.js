import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const MovieDetails = () => {
  const [details, setDetails] = useState({})
  const navigate = useNavigate()
  const { movieId } = useParams()

  const onBackButtonClick = () => {
    navigate(-1)
  }
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=c4d0ef560a112a28bb0aa7ff2aa79464&language=en-US`)
      .then((response) => response.json())
      .then((data) => {
        setDetails(data)
      });
  }, [movieId]);

  return (
    <div>
      <button type="button" onClick={onBackButtonClick}>Go back!</button>
      <img className="background-img" src={`https://image.tmdb.org/t/p/w1280/${details.backdrop_path}`} alt={details.original_title} />
      <div className="movie-details">
        <a href={`https://www.imdb.com/title/${details.imdb_id}/?ref_=nv_sr_srsg_0`} target="_blank" rel="noreferrer">
          <img className="small-poster" src={`https://image.tmdb.org/t/p/w342/${details.poster_path}`} alt={details.original_title} />
          <h2>{details.original_title}</h2>
        </a>
        <div className="genres">
          {details.genres
            ? (details.genres.map((genre) => {
              return (
                <p key={genre.id} className="genre">{genre.name}</p>
              )
            }))
            : ''}
        </div>
        <div className="production-countries">
          {details.production_countries
            ? (details.production_countries.map((country) => {
              return (
                <p key={country.iso_3166_1} className="country">{country.name}</p>
              )
            }))
            : ''}
          <p key={details.original_title}>{new Date().getFullYear(details.release_date)}</p>
        </div>
        <p>{Math.floor(details.runtime / 60)}h {(details.runtime) % 60}min</p>
        <p>⭐ {Math.round(details.vote_average * 10) / 10}/10</p>
        <p>{details.overview}</p>
      </div>
    </div>
  )
}
