import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Popular = ({ title, image, date, id }) => {
  const [visible, setVisible] = useState(false);

  let display = { display: "none" };
  let opacity = { opacity: "1" };
  if (visible) {
    display.display = "block";
    opacity.opacity = ".4";
  }
  return (
    <div key={id} className="movie">
      <Link
        to={`/details/${id}`}
        className="movie_grid"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        <img
          src={`https://image.tmdb.org/t/p/w342/${image}`}
          alt={title}
          style={opacity}
        />
        <div id="movie_details" style={display}>
          <h2>{title}</h2>
          <p>Released: {date}</p>
        </div>
      </Link>
    </div>
  );
};
