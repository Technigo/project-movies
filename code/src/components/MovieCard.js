import React from 'react';
import {Link} from 'react-router-dom';

export const MovieCard = ({title, poster_path, release_date, id}) => {
  return(
    <Link to={`/movies/${id}`}>
      <section className="movie-card">
        <div className="movie-info">
          <h2>{title}</h2>
          <p>Released: {release_date}</p>
        </div>
        <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>
      </section>
    </Link>
  )
}