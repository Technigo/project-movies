import React, { useEffect, useState } from 'react'
import { useParams, useRouteMatch } from 'react-router-dom'
import { Link } from 'react-router-dom'

import '../style/movieDetails.css'
import PageNotFound from './PageNotFound';

const MovieDetails = () => {
  const match = useRouteMatch();
  const { movieId } = useParams();
  const [ movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const [errorMessage, setErrorMessage] = useState()
  // const [pageNotFound, setPageNotFound] = useState(false)

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=fd00bf32c04d62eccaf294e2d6aa9fa6&language=en-US`)
    
    .then((res) => res.json())
    .then((json) => {
      console.log("json", json)
      if(json.success === false) {
        throw new Error(json.status_message)
      }
      setMovie(json)
      setGenres(json.genres)
    })
      .catch (error => {
        setErrorMessage(error);
      })
  }, [movieId]);

  return ( 
    <div>
      {!errorMessage &&
        <article className="movie-detail-page">
          <div
            className="movie-backdrop"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`
            }}
          >
          </div>
          <div className="movie-summary">
            <div className="movie-poster-container">
              <a target="_blank" href={`${movie.homepage}`} rel="noopener noreferrer">
                <img className="movie-poster"
                  src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} 
                  alt={movie.title} 
                />
              </a>
            </div>
            <section className="movie-description">
              <div className="movie-description-first-row"> 
                <a className="movie-homepage-link" target="_blank" href={`${movie.homepage}`} rel="noopener noreferrer">
                  <h2 className="movie-title">{movie.title}</h2>
                </a>
                <p className="movie-rating">
                  <svg className="rating-star" xmlns="http://www.w3.org/2000/svg" fill="#ffd300" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
                  <span className="move-rate-number">{movie.vote_average}/10</span>
                </p>
              </div>
              <div className="movie-genres">
                <span className="genres-dot">&#8226;</span>
                  {genres.map((genre) => (
                    <div className="genre"key={genre.id}>
                    {genre.name}
                    </div>
                  ))}
                <span className="genres-dot">&#8226;</span>
              </div>
              <p className="movie-tagline">{movie.tagline}</p>
              <p className="movie-overview">{movie.overview}</p>
              <div className="people-link-container">
                <Link className="movie-people-link" to={`${match.url}/cast`}>
                  <p>CAST >></p>
                </Link>
                <Link className="movie-people-link" to={`${match.url}/crew`}>
                  <p>CREW >></p>
                </Link>
              </div>
            </section>
          </div> 
        </article>
      }
      {errorMessage &&
      <PageNotFound
        errorMessage={errorMessage}
      />}  
    </div>
  );
};
 
export default MovieDetails;