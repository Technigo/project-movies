import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const GenreMovieDetails = () => {
  const [genreMovieDetails, setGenreMovieDetails] = useState({})
  const navigate = useNavigate()
  const { genreMovieId } = useParams()

  const onBackButtonClick = () => {
    navigate(-1)
  }
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${genreMovieId}?api_key=c4d0ef560a112a28bb0aa7ff2aa79464&language=en-US`)
      .then((response) => response.json())
      .then((data) => {
        setGenreMovieDetails(data)
      });
  }, [genreMovieId]);

  return (
    <div>
      <button type="button" onClick={onBackButtonClick}>Go back!</button>
      <img className="background-img" src={`https://image.tmdb.org/t/p/w1280/${genreMovieDetails.backdrop_path}`} alt={genreMovieDetails.original_title} />
      <div className="movie-details-container">
        <a href={`https://www.imdb.com/title/${genreMovieDetails.imdb_id}/?ref_=nv_sr_srsg_0`} target="_blank" rel="noreferrer">
          <img className="small-poster" src={`https://image.tmdb.org/t/p/w342/${genreMovieDetails.poster_path}`} alt={genreMovieDetails.original_title} />
        </a>
        <div className="movie-details">
          <h2>{genreMovieDetails.original_title}</h2>
          <span className="details-under-headline">
            <p key={genreMovieDetails.original_title}>
              {new Date().getFullYear(genreMovieDetails.release_date)}
            </p>
            •
            <p>
              {Math.floor(genreMovieDetails.runtime / 60)}h&nbsp;
              {(genreMovieDetails.runtime) % 60}min&nbsp;
            </p>
          </span>
          <div className="genres">
            {genreMovieDetails.genres
              ? (genreMovieDetails.genres.map((genre) => {
                return (
                  <p key={genre.id} className="genre">{genre.name}</p>
                )
              }))
              : ''}
          </div>
          <div className="production-countries">
            {genreMovieDetails.production_countries
              ? (genreMovieDetails.production_countries.map((country) => {
                return (
                  <p key={country.iso_3166_1} className="country">{country.name}</p>
                )
              }))
              : ''}
          </div>
          <p>⭐ {Math.round(genreMovieDetails.vote_average * 10) / 10}/10</p>
          <p>{genreMovieDetails.overview}</p>
        </div>
      </div>
    </div>
  )
}
