import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LIST_URL } from "../utils/urls";

const List = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch(LIST_URL)
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  }, []);

  return (
    <div>
      {movieList.map((movie) => (
        <Link to={`/movies/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={movie.title}
          />
        </Link>
      ))}
    </div>
  );
};

export default List;
