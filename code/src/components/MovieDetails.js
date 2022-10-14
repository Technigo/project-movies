import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({})

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=d7ebb1544b11b5a98ffd2c23bb80dd3b&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        setMovie(json);
      })
  }, [movieId]);

  return (
    <>
      <img className="background-img" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
      <div className="details-wrapper">
        <a className="goBackBtn" href="/">
          <svg className="goback-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z" fill="#fff" fillRule="evenodd" /></svg>
          <p className="icon-text">Movies</p>
        </a>
        <div className="movie-details">
          <img className="details-img" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
          <div className="details-text">
            <div className="text-box">
              <h2 className="movie-detail-title">{movie.title}</h2>
              <h3 className="rating">&#11088; {movie.vote_average}/10</h3>
              <p className="movie-detail-text">{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default MovieDetails;