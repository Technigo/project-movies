import React from 'react';
import { Link } from 'react-router-dom'

export const MovieContainer = ({ title, release, poster, id}) => {
    return (
        <Link to={`/movies/${id}`}>
            <div className="movie-container">
                <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} />
                <div className="movie-info-container">
                    <h2>{title}</h2>
                    <p>Released {release}</p>
                </div>
            </div>
        </Link>
    )
}