import React from "react";

export const MovieCard = ({
  title,
  release_date,
  vote_average,
  poster_path,
  backdrop_path,
}) => {
  return (
    <article>
      <p>{title}</p>
      <p>{release_date}</p>
      <p>{vote_average} / 10</p>
      <img src={`https://image.tmdb.org/t/p/w342/${poster_path}`} alt={title} />
      <img
        src={`https://image.tmdb.org/t/p/w300/${backdrop_path}`}
        alt={title}
      />
    </article>
  );
};
