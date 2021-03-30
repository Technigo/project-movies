import React from 'react';
import {Link} from 'react-router-dom';

export const MovieCard = ({title, poster_path, vote_average, release_date, id}) => {
  return(
    <Link to={`/movies/${id}`}>
      <section className="movie-card">
        {title}
        <div className="movie-card-image-wrapper">
          <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>
          <p>{vote_average}/10</p>
          <p>{release_date}</p>
        </div>
      </section>
    </Link>
  )
}