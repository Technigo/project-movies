import React, { useState, useEffect } from "react";
import { API_URL } from "utils/url";
import { Link } from "react-router-dom";

const MovieList = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovie(data.results);
      });
  }, []);

  return (
    <div>
      {movie.map((item) => (
        <div key={item.id}>
          <img
            src={`https://image.tmdb.org/t/p/w300${item.backdrop_path}`}
            alt="movie-title"
          />
          <Link to={`/movies/${item.id}`}>{item.title}</Link>
        </div>
      ))}
    </div>
  );
};
export default MovieList;
