import React from 'react'
import { Link } from 'react-router-dom';


export const MovieThumb = ({ id, poster_path, title, vote_average }) => {
  return (
    <article>
      <Link to={`/movies/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`} // check this
          alt={title}
        />
        <div className='movie-wrapper'>
          <h2>{title}</h2>
          <p className="movie-rating">{`${vote_average}` / 10}</p>
        </div>
      </Link>
    </article>
  );
};
