import React from "react";

const MoviePoster = ({ title, poster_url, release }) => {
  const POSTER_URL = `https://image.tmdb.org/t/p/w500${poster_url}`;
  return (
    <>
      <div className="poster-overlay">
        <h1>{title}</h1>
        <p>Released {release}</p>
      </div>
      <img className="poster-image" src={POSTER_URL} alt="poster" />
    </>
  );
};

export default MoviePoster;
