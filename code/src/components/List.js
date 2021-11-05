import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "components/list.css";

import { MOVIES_URL } from "../utils/urls";

const List = ({ movie }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(MOVIES_URL)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results);
      });
  }, []);

  return (
    <section className="movie-container">
      {movies.map((movie) => (
        <Link
          className="movie-link"
          key={movie.id}
          to={`/movies/${movie.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="movie-and-text">
            <img
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="details-container">
              <h1 className="hover-text">{movie.title}</h1>
              <p className="hover-text">Released {movie.release_date}</p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default List;
