import React from "react";
import { IMG_URL } from "../Utils/Url.js";
import { Link } from "react-router-dom";
import "./List.css";
const Movielist = ({ lists }) => {
  return (
    <div className="list">
      {lists.map((list) => (
        <div key={list.id}>
          <Link to={`/movies/${list.id}`}>
            <img src={`${IMG_URL}${list.poster_path}`} alt={list.title} />
            <div className="movietitle">
              <h1>{list.title}</h1>
              <p>Released: {list.release_date}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Movielist;
