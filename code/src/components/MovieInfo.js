import React from 'react'
import { Link } from 'react-router-dom'

export const MovieInfo = ({ id, poster_path, original_title, release_date }) => {


    return (
        <div className="movies-card">
            <div className="movie-wrapper" key={id}>
                <Link to={`movies/${id}`}>
                    <div className="movie-info">
                        <h2 className="movie-title">{original_title}</h2>
                        <p className="release-date">Released:{release_date}</p>
                    </div>
                    <div>
                        <img src={`http://image.tmdb.org/t/p/w780${poster_path}`} alt={original_title} />
                    </div>
                </Link>
            </div>
        </div>
    )
}
