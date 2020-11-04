import React from 'react';
import { Link } from 'react-router-dom';

const MovieThumb = ({ id, poster_path, name, title, release_date }) => {
  return (
    <article className="movieThumb">
      <Link className="movieThumb__link" to={`/movies/${id}`}>
        {/* <picture className="article__image">
          <source
            media="(min-width:1024px)"
            srcSet={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          />
          <source
            media="(min-width:768px)"
            srcSet={`https://image.tmdb.org/t/p/w342/${poster_path}`}
          />
          <img
            src={`https://image.tmdb.org/t/p/w154/${poster_path}`}
            alt={name}
            style="width:auto;"
          />
        </picture> */}
        <img
          className="movieThumb__image"
          src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
          alt={name}
        />
        <div className="movieThumb__overlay">
          <h2>{title}</h2>
          <p>{`Released ${release_date}`}</p>
        </div>
      </Link>
    </article>
  );
};
export default MovieThumb;
