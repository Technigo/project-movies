import React from 'react';
import {Link} from 'react-router-dom';

import '../style/MovieThumbnail.css';

export const MovieThumbnail = ({title, release_date, poster_path, id}) => {
    return (
        <Link to={`/movies/${id}`}>
            <section className="movie-thumbnail-container">
                <div className="thumbnail-overlay">
                    <img className="movie-poster-image" src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt={title} />
                    <div className="movie-title-and-release-container">
                        <h1 className="movie-title">{title}</h1>
                        <h2 className="release-date">{release_date}</h2>
                    </div>
                </div>
            </section>
        </Link>
    )
}