import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LIST_URL } from "../utils/urls";
import Loader from "./Loader";

import "./List.css";

const List = () => {
  const [movieList, setMovieList] = useState([]); // state property initialized with an empty array
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
  }, []); // pass an empty array as the second argument so the hook is only called one time, when component is mounted

  return (
    <>
      {loading && <Loader />}
      <div className="movie-container">
        {movieList
          .sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
          .map((movie) => (
            <Link key={movie.id} to={`/movies/${movie.id}`}>
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
    </>
  );
};

export default List;
