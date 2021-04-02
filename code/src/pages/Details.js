import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { Error } from "../components/Error";

export const Details = () => {
  const [movie, setMovie] = useState();
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=dbc6417f14d69bcdf76f3599707a6abd&language=en-US`)
    .then(res => res.json())
    .then((json) => {
        if (json.success === false) {
        setError(true) 
      } else {
          setMovie(json) 
        }})
  }, [id])


  return (
    <div>
      {error && <Error />}
      {movie && (
        <div className="background-image" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 10%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`}}>
          <Link className="return" to="/"><i className="fas fa-chevron-circle-left"></i><span className="return-text">Movies</span></Link>
          <section className="movie-details">
            <img tabIndex='0' className="poster-image" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
            <div className="details-text">
                <h1 tabIndex='0' className="movie-detail-title">{movie.title}</h1>
                <div className="rating-imdb">
                    <p tabIndex='0' className="rating">{movie.vote_average} <span className="rating-total">/ 10</span></p>
                    <a href={`https://www.imdb.com/title/${movie.imdb_id}`} className="imdb">IMDb</a>
                </div>
                <div tabIndex='0' className="movie-genres">
                    {movie.genres.map((genre) => (
                        <p key={genre.id} className="genre">{genre.name} </p>
                    ))}
                </div>
                <p tabIndex='0' className="runtime">{movie.runtime} min</p>
                <p tabIndex='0' className="overview">{movie.overview}</p>
            </div>
          </section>
        </div>
      )}    
    </div>
  )
}