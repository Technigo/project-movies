import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { API_KEY, imageURL } from 'utils/urls';
import { Loader } from './Loader';

export const GenreMovieDetails = () => {
  const [genreMovieDetails, setGenreMovieDetails] = useState({})
  const { genreMovieId } = useParams()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${genreMovieId}?api_key=${API_KEY}&language=en-US`)
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
      <img className="background-img" src={`${imageURL}/w1280/${genreMovieDetails.backdrop_path}`} alt={genreMovieDetails.original_title} />
      <div className="movie-details">
        <a href={`https://www.imdb.com/title/${genreMovieDetails.imdb_id}/?ref_=nv_sr_srsg_0`} target="_blank" rel="noreferrer" className="small-poster-a">
          <img className="small-poster" src={`${imageURL}/w780/${genreMovieDetails.poster_path}`} alt={genreMovieDetails.original_title} />
        </a>
        <div className="details-text-wrapper">
          <div className="details-row">
            <p>
              {Math.floor(genreMovieDetails.runtime / 60)}h {(genreMovieDetails.runtime) % 60}min
            </p>
            <p>⭐ {Math.round(genreMovieDetails.vote_average * 10) / 10}/10</p>
          </div>
          <div className="details-container">
            <h2>{genreMovieDetails.title}</h2>
            <div className="genres">
              {genreMovieDetails.genres
                ? (genreMovieDetails.genres.map((genre) => {
                  return (
                    <Link
                      key={genreMovieDetails.production_companies[0].id}
                      to={`/genre-list/${genre.id}`}
                      className="genre">
                      {genre.name}
                    </Link>
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
      </div>
    </div>
  )
}
