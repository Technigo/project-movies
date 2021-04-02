import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BackLink from "../components/BackLink";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=9e2d991bdc86d11d2a7e1e110ef63aac&language=en-US`;

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((movie) => setMovie(movie))
      .catch((error) => console.log(error));
  }, [API_URL]);

  return (
    <article className="movie-details">
      {movie.length === 0 ? (
        <>Loading</>
      ) : (
        <>
          <BackLink />
          <div className="movie-details-wrapper">
            <picture className="movie-details__background">
              <source
                srcSet={`http://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                media="(min-width: 1024px)"
              />
              <img
                src={`http://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                alt={movie.original_title}
              />
            </picture>
            <div className="movie-details-info">
              <div className="movie-details-info__image-container">
                <img
                  src={`http://image.tmdb.org/t/p/w342${movie.poster_path}`}
                  alt={movie.original_title}
                ></img>
              </div>
              <div className="movie-details-info__text-container">
                <h1 className="movie-details-info__title">
                  {movie.original_title}
                  <span className="movie-details-info__votes">
                    {movie.vote_average}/10
                  </span>
                </h1>
                <p className="movie-details-info__overview">{movie.overview}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </article>
  );
};

export default MovieDetails;
