import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MovieList = ({ movie }) => {
  return (
    <section className="main-container">
      {movie.map((movie) => (
        <Link to="/" key={movie.id} className="movie-container">
          <div className="overlay"></div>
          <img
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="movie-title">
            <h3>{movie.title}</h3>
            <p>Released: {movie.release_date}</p>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default MovieList;
