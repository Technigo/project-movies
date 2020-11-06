import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import '../styles/MovieDetails.css'

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const API_KEY = '2df2062fe6afeadacbfc1fd0a84167fa'
  const MOVIE_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  //Perform a fetch for the movie-details:
  useEffect(() => {
    fetch(MOVIE_URL)
      .then(response => response.json())
      .then(json => {
        setMovie(json)
        console.log(json);
      })
  }, [id]) //I put [id] as a dependency in the arry here. Then the fetch wont have to be excecuted again. Is that right?

  //Move some styles to CSS:
  const movieDetailStyle = {
    backgroundImage: `url("https://image.tmdb.org/t/p/w1280${movie.backdrop_path}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  }

  return (
      <article className="details-page" style={movieDetailStyle}>
        <div className="details-overlay"></div>
        <Link to="/" className="back-link">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 30 30">
          <path 
            d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z" fill="#fff" fill-rule="evenodd">
          </path>
        </svg>
        Back to Movie List
      </Link>
          <div className="details-summary">
            <img
              className="details-summary-poster" 
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} 
              alt={`Poster picture of ${movie.title}`} 
            />
            <div className="details-summary-text">
              <h3 className="details-summary-heading">
                {movie.title}
                <span className="details-summary-star"> {'⭐️'} </span>
                <span className="details-summary-rating">
                  {movie.vote_average} /10
                </span>
              </h3>
              <p className="details-summary-overview">{movie.overview}</p>
            </div>
          </div>
      </article>
  );
};
export default MovieDetails;