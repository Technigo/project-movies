import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({
  poster_path,
  title,
  release_date,
  id,
}) => {
  return (
    <Link to={`/movies/${id}`}>
      <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt={title} />
      <div className="details">
        <h1>{title}</h1>
        <p>Released: {release_date}</p>
      </div>
    </Link>
  );
};

export default MovieCard;