import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./movieStyle.css";

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  const detailsURL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=9dbb13757543047a90651a50d540380e&language=en-US`;

  useEffect(() => {
    fetch(detailsURL)
      .then((res) => res.json())
      .then((json) => {
        setMovie(json);
      });
  }, [detailsURL]);

  return (
    <section
      className="all-movies "
      key={movie.id}
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}')`,
      }}
    >
      <div className="background-linear-gradient">
        <div className="back-btn">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="#fff"
            >
              <path d="M12 24c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm-1-17v4h8v2h-8v4l-6-5 6-5z" />
            </svg>
            <span>Go back</span>
          </Link>
        </div>

        <div className="single-movie">
          <img
            src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
            alt={movie.title}
          />

          <div className="overview">
            <h1 className="movie-title">{movie.title}</h1>
            <h3>
              <span className="voted-stars" role="img" aria-label="star">
               {" ⭐️  "}
              </span>
              <span className="voted">{movie.vote_average}/10</span>
            </h3>
            <p className="movie-info-box">{movie.overview}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
