import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { API_KEY, imageURL } from 'utils/urls';

export const MovieDetails = () => {
  const [details, setDetails] = useState({})
  const { movieId } = useParams()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
      .then((response) => response.json())
      .then((data) => {
        setDetails(data)
      });
  }, [movieId]);

  return (
    <div className="details">
      <img className="background-img" src={`${imageURL}/w1280/${details.backdrop_path}`} alt={details.id} />
      <div className="movie-details">
        <a href={`https://www.imdb.com/title/${details.imdb_id}/?ref_=nv_sr_srsg_0`} target="_blank" rel="noreferrer" className="small-poster-a">
          <img className="small-poster" src={`https://image.tmdb.org/t/p/w780/${details.poster_path}`} alt={details.original_title} />
        </a>
        <div className="details-text-wrapper">
          <div className="details-row">
            <p>{Math.floor(details.runtime / 60)}h {(details.runtime) % 60}min</p>
            <p>⭐ {Math.round(details.vote_average * 10) / 10}/10</p>
          </div>
          <div className="details-container">
            <h2>{details.title}</h2>
            <div className="genres">
              {details.genres
                ? (details.genres.map((genre) => {
                  return (
                    <Link
                      key={details.runtime}
                      to={`/genre-list/${genre.id}`}
                      className="genre">
                      {genre.name}
                    </Link>
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
            <p className="details-plot">{details.overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
