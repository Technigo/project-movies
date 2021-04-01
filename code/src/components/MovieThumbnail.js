import React from 'react';
import {Link} from 'react-router-dom';

import '../style/MovieThumbnail.css';

export const MovieThumbnail = ({title, release_date, poster_path, id}) => {
    return (
        <section className="movie-thumbnail-container">
        <Link to={`/movies/${id}`} className="movie-link">            
                    <img className="movie-poster-image" src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt={title} />
                    <div className="movie-text-container">
                        <h1 className="movie-title">{title}</h1>
                        <h2 className="release-date">Released {release_date}</h2>
                    </div>
        </Link>
        </section>
    )
}