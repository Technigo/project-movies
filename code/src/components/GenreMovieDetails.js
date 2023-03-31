import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from './Loader';

export const GenreMovieDetails = () => {
  const [genreMovieDetails, setGenreMovieDetails] = useState({})
  const { genreMovieId } = useParams()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${genreMovieId}?api_key=c4d0ef560a112a28bb0aa7ff2aa79464&language=en-US`)
      .then((response) => response.json())
      .then((data) => {
        setGenreMovieDetails(data)
      })
      .finally(() => {
        setTimeout(() => setLoading(false), 1500)
      })
  }, [genreMovieId]);
  if (loading) {
    return (
      <Loader />
    )
  }

  return (
    <div className="details">
      {/* <img className="background-img" src={`https://image.tmdb.org/t/p/w1280/${genreMovieDetails.backdrop_path}`} alt={genreMovieDetails.original_title} /> */}
      <div className="movie-details">
        <a href={`https://www.imdb.com/title/${genreMovieDetails.imdb_id}/?ref_=nv_sr_srsg_0`} target="_blank" rel="noreferrer">
          <img className="small-poster" src={`https://image.tmdb.org/t/p/w780/${genreMovieDetails.poster_path}`} alt={genreMovieDetails.original_title} />
        </a>
        <div className="details-row">
          <p>
            {Math.floor(genreMovieDetails.runtime / 60)}h {(genreMovieDetails.runtime) % 60}min
          </p>
          <p>⭐ {Math.round(genreMovieDetails.vote_average * 10) / 10}/10</p>
        </div>
      </div>
      <div className="details-container">
        <h2>{genreMovieDetails.original_title}</h2>
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
          <p key={genreMovieDetails.original_title}>
            {new Date().getFullYear(genreMovieDetails.release_date)}
          </p>
        </div>
        <p className="details-plot">{genreMovieDetails.overview}</p>
      </div>
    </div>
  )
}
