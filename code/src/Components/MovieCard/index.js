import React from 'react'
import './movieCard.css'

export const MovieCard = () => {
    return (
        <div className="movieCard-container">
            <img className="movieCard-image" src="https://image.tmdb.org/t/p/w342/d5NXSklXo0qyIYkgV94XAgMIckC.jpg" alt="movie" />
            <div className="movieCard-overlay">
                <div className="movieCard-text">
                    <h1 className="movieCard-title">Snake Eyes: G.I. Joe Origins</h1>
                    <p className="movieCard-realease">Released 2021-09-15</p>
                </div>
            </div>
        </div>
    )
}
