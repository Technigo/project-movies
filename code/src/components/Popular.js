import React from "react";
import { Link } from "react-router-dom";

export const Popular = ({ title, image, date, id }) => {
  return (
    <div key={id} className="movie">
      <Link to={`/details/${id}`} className="movie_grid">
        <img src={`https://image.tmdb.org/t/p/w342/${image}`} alt={title} />
        <div id="movie_details">
          <h2>{title}</h2>
          <p>Released: {date}</p>
        </div>
      </Link>
    </div>
  );
};
