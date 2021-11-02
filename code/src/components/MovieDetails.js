import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DETAILS_URL } from "utils/urls";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(DETAILS_URL(movieId))
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, [movieId]);

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
        alt={movie.title}
      />
      <img
        src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
        alt={movie.title}
      />
      <div>
        <span className="movie-title-details">{movie.title}</span>{" "}
        <span className="rating">{movie.vote_average}/10</span>
      </div>
      <p className="overview-text">{movie.overview}</p>
    </div>
  );
};

export default MovieDetails;
