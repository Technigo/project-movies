import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="movie-container">
      <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title}></img>
    </div>
  );
};

export default Movie;
