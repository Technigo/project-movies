import React from "react";

const MovieList = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>Released {movie.date}</p>
          <p>{movie.rating}/10</p>
          <p>{movie.description}</p>
          <img src={movie.coverImgUrl} alt={movie.title} />
          <img src={movie.backdropImgUrl} alt={movie.title} />
        </div>
      ))}
    </>
  );
};

export default MovieList;
