import React from "react";
import { useParams, Link } from "react-router-dom";

const MovieDetails = ({ movies }) => {
  const { movieId } = useParams();

  const movie = movies.filter((movie) => movie.id === Number(movieId))[0];

  return (
    <main>
      <Link to={"/"}>Back to all movies</Link>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>{movie.rating}</p>
      <img src={movie.coverImgUrl} alt={movie.coverImgUrl} />
      <img src={movie.backdropImgUrl} alt={movie.backdropImgUrl} />
    </main>
  );
};

export default MovieDetails;
