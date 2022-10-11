import React from 'react';
import { Link } from 'react-router-dom';

const MoviePoster = (props) => {
  return (
    <Link key={props.poster.id} to={`/posters/${props.poster.id}`}>
      <img
        src={`https://image.tmdb.org/t/p/w1280/${props.poster.poster_path}`}
        alt=""
      />
    </Link>
  );
};

export default MoviePoster;
