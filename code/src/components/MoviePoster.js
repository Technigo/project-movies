import React from 'react'

import { Link } from 'react-router-dom';


export const MoviePoster = ({ title, release_date, poster_path, id  }) => {
    return (
        <Link to={`/movies/${id}`}>
        <section className="movie-poster-container">
            <div className="poster-wrapper">
                <img className="movie-poster" src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt={title} />
                <div className="poster-description">
                    <p>{title}</p>
                    <span className="release">Released {release_date}</span>
                </div>
            </div>
        </section>
        </Link> 
    )
}