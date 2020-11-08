import React, { useEffect, useState } from "react";
import { useParams, Link, Redirect } from "react-router-dom";

import "../css/movieDetails.css";

export const MovieDetails = () => {
  const { movieId, title } = useParams();
  console.log("movieId: " + movieId);
  console.log("title: " + title);
  const [movie, setMovie] = useState([]);
  //const history = useHistory();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=16cd57d89911f5854d96fcf791abf8a9&language=en-US`
    )
      .then((res) => res.json())
      .then((json) => {
        setMovie(json);
        console.log(json);
      });
  }, [movieId]);

  if (movie.status_code === 34) {
    return <Redirect to="/404" />;
  } else {
    return (
      <section
        className="details-page"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
        }}
      >
        <Link to="/" className="back-button">
          <span className="fas fa-chevron-circle-left"></span>
          Movies
        </Link>
        <div className="movie-details-container">
          <img
            className="movie-details-image"
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={movie.title}
          ></img>
          <div className="movie-details">
            <div className="title-rating-container">
              <h2 className="movie-details-title">{movie.title}</h2>
              <p className="rating">{movie.vote_average}/10</p>
            </div>
            <p className="overview">{movie.overview}</p>
          </div>
        </div>
      </section>
    );
  }
};
