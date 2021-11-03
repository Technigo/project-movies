import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import Dropdown from "Components/Dropdown/Dropdown";
import "./MovieList.css";

const MovieList = ({ select, setSelect, movieList, loading }) => {
  return (
    <>
      <main className="movie-list-container">
        <Dropdown select={select} setSelect={setSelect} />
        {movieList.map((movie) => (
          <Link
            to={`/details/${movie.id}`}
            key={movie.id}
            className="movie-card"
          >
            <img
              src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
              alt={movie.title}
              className="movie-image"
            />
            <div className="movie-title-date">
              <h1>{movie.title}</h1>
              <p className="date-movie">
                Released: {moment(movie.release_date).format("LL")}
              </p>
            </div>
          </Link>
        ))}
      </main>
    </>
  );
};

export default MovieList;
