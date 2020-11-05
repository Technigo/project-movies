import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ original_title, id, poster_path }) => {

    return (
        <Link to={`/movie/${id}`}>
            <div className="movie-card">
                <img
                    src={`http://image.tmdb.org/t/p/w300${poster_path}`}
                    alt={`poster of ${original_title}`}
                />
                <h2>{original_title}</h2>
                
            </div>
        </Link>
    )
}

export default Movie;