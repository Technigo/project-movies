import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="movie-container">
      <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title}></img>
      <div className="details-overlay"><h1>{movie.title}</h1><p>Released {movie.release_date}</p></div>
    </div>
  );
};

export default Movie;
