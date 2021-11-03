import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MoviesList = ({ films }) => {
  return (
    <div className="main-container">
      {films.map((cat) => (

        <Link to={`/details/${cat.id}`} className="movie-link">
          
          <div key={cat.id} className="movie-container">
            <div className="overlay">
              <section className="text-wrapper">
                <h1 className="movie-title">{cat.original_title}</h1>
                <p className="release-date">{cat.release_date}</p>
              </section>
            </div>
            <img
              src={`https://image.tmdb.org/t/p/w780${cat.poster_path}`}
              alt="picture"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MoviesList;
