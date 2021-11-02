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
    <>
      {movie.map((item) => (
        <div className="movie-container" key={item.id}>
          <div className="overlay-container">
            <img
              src={`https://image.tmdb.org/t/p/w780${item.backdrop_path}`}
              alt="movie-title"
            />

            <div className="overlay">
              <Link to={`/movies/${item.id}`}>{item.title}</Link>
              <p className="release">Released: {item.release_date}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default MovieList;
