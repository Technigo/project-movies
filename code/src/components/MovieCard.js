import React from 'react';
import {Link} from 'react-router-dom';

export const MovieCard = ({title, poster_path, vote_average, release_date, id}) => {
  return(
    <Link to={`/movies/${id}`}>
      <section className="movie-card">
        <h2>{title}</h2>
        <div className="movie-card-image-wrapper">
          <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>
          <p>Released: {release_date}</p>
        </div>
      </section>
    </Link>
  )
}