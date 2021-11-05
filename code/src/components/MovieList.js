import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movie }) => {
  return (
    <div>
      <div className="outer-container">
        {movie.map((item) => (
          <div className="movie-container" key={item.id}>
            <div className="overlay-container">
              <img
                className="main-movie"
                src={`https://image.tmdb.org/t/p/w780${item.poster_path}`}
                alt="movie-title"
              />
              <div className="overlay">
                <Link className="movie-anchor" to={`/movies/${item.id}`}>
                  {item.title}
                </Link>
                <p className="release">Released: {item.release_date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MovieList;
