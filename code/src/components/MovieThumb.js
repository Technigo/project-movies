import React from 'react';

const MovieThumb = ({title, release_date, poster_path}) => {
  
    return (
        <section className="movie-card">
            <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}  />
            <div className="title-release-container">
                <p className="movie-title">{title}</p>
                <p className="movie-release">Released:{release_date}</p>
            </div>
        </section>

    )
}
export default MovieThumb;