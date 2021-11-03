import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LIST_URL } from "../utils/urls";
import Loader from "./Loader";

import "./List.css";

const List = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false); // for loader

  const fetchMovies = () => {
    setLoading(true);
    fetch(LIST_URL)
      .then((res) => res.json())
      .then((data) => setMovieList(data.results))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchMovies();
    // fetch(LIST_URL)
    //   .then((res) => res.json())
    //   .then((data) => setMovieList(data.results));
  }, []);

  return (
    <div className="movie-container">
      {loading && <Loader />}
      {movieList.map((movie) => (
        <Link to={`/movies/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={movie.title}
          />

          <div className="details">
            <h1>{movie.title}</h1>
            <p>Released {movie.release_date}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default List;
