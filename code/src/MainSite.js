import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MainSite = ({ movies }) => {
  return (
    <div>
      <section>
        {movies.map((movie) => (
          <Link key={movie.original_title} to={`/details/${movie.title}`}>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.original_title}
            />
            <h1>{movie.original_title}</h1>
            <p>Released {movie.release_date}</p>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default MainSite;
