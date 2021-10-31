import React from 'react'
import './movieCard.css'

export const MovieCard = (movie) => {

    return (
        <div className="movieCard-container">
            <img className="movieCard-image" src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt={movie.title} />
            <div className="movieCard-overlay">
                <div className="movieCard-text">
                    <h1 className="movieCard-title">{movie.title}</h1>
                    <p className="movieCard-realease">{movie.release_date}</p>
                </div>
            </div>
        </div>
    )
}
