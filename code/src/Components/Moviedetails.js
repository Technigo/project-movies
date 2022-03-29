import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { API_KEY, DETAIL_URL } from "../Utils/Url.js";
import { IMG_URL, IMG_URL_LARGE } from "../Utils/Url.js";
import "./Details.css";

const Moviedetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    const url = `${DETAIL_URL}/${id}?api_key=${API_KEY}&language=en-US`;
    fetch(url)
      .then((data) => data.json())
      .then(setMovie);
  }, [id]);

  const backdropImg = movie
    ? `url("${IMG_URL_LARGE}${movie.backdrop_path}")`
    : "";
  return (
    <main className="movie-detail" style={{ backgroundImage: backdropImg }}>
      <NavLink
        className={({ isActive }) =>
          "link" + (isActive ? " my-custom-classname" : "")
        }
        to="/"
      >
        <span className="arrow">
          <svg
            className="arrowIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 256 512"
          >
            <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" />
          </svg>
        </span>
        Movies
      </NavLink>
      {movie && (
        <section className="detail">
          <img
            className="detail-poster"
            src={`${IMG_URL}${movie.poster_path}`}
            alt={movie.title}
          />
          <article className="detail-article">
            <header className="detail-header">
              <h1 className="detail-title">{movie.title}</h1>
              <p className="detail-rating">{movie.vote_average}/10</p>
            </header>
            <p className="detail-overview">{movie.overview}</p>
          </article>
        </section>
      )}
    </main>
  );
};

export default Moviedetails;
