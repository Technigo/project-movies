import React from 'react';
import { Link } from 'react-router-dom';

export const MovieThumb = ({
    title,
    poster_path,
    release_date,
    id,
}) => {
    return (
    <Link to={`/movies/${id}`}> 
        <section className="movie-thumb">
            {/* <span>
            </span> */}
            <div className="movie-thumb-image-wrapper">
                <img className="movie-thumb-image" src={`https://image.tmdb.org/t/p/w780${poster_path}`} alt={title} />
                <p className="movie-thumb-image-description">
                {title}
                <span>
                {release_date}
                </span>
                </p>
            </div>
        </section>
    </Link>
    );
};
