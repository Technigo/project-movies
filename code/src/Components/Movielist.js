import React from "react";
import { IMG_URL } from "../Utils/Url.js";
import { Link } from "react-router-dom";
const Movielist = ({ lists }) => {
  return (
    <div>
      {lists.map((list) => (
        <div key={list.id}>
          <Link to={`/movies/${list.id}`}>
            <img
              src={`${IMG_URL}${list.backdrop_path}`}
              alt={list.original_title}
            />
          </Link>
          <h1>{list.original_title}</h1>
          <h3>{list.release_date}</h3>
        </div>
      ))}
    </div>
  );
};

export default Movielist;
