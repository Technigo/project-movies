import React from "react";

const MoviePoster = ({ title, poster_url, release }) => {
  const POSTER_URL = `https://image.tmdb.org/t/p/w500${poster_url}`;
  return (
    <div>
      <p>{title}</p>
      <img src={POSTER_URL} alt="poster" />
      <p>{release}</p>
    </div>
  );
};

export default MoviePoster;
