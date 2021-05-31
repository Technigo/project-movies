import React from 'react'
import { Link } from 'react-router-dom'

import { MOVIE_BACKDROP } from './API_URL'

const MovieElement = ({title, poster_path, release_date, id}) => { 

    return (
        <Link to={`/movies/${id}`}>
            <div className="movie">
                <img className="poster-image-element" src={MOVIE_BACKDROP(poster_path)} alt={title} />
                <div className="overlay">
                    <h1 className="movie-title">{title}</h1>
                    <p className="movie-release">{release_date}</p>
                </div>
            </div>
        </Link>
    )
}

export default MovieElement


