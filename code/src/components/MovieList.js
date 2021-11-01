import React from "react";

const movieList = ({ movies }) => {
  return (
    <section className="list-wrapper">
      {movies.map((movie) => (
        <div key={movie.id}>
          <div className="movie-info">
            <p>{movie.title}</p>
            <p>{movie.release_date}</p>
          </div>
          <img
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          ></img>
        </div>
      ))}
    </section>
  );
};
export default movieList;

// , movieName, releaseDate, picture
