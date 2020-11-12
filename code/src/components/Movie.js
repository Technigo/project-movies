import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ title, id, poster_path, release_date }) => {

    return (
        <Link to={`/movie/${id}`}>
                <img
                    src={`http://image.tmdb.org/t/p/w342${poster_path}`}
                    alt={`poster of ${title}`}
                />
                <div className="movie-card-details">
                    <h1>{title}</h1>
                    <p>Released: {release_date}</p>
                </div>
        </Link>
    )
};

export default Movie;