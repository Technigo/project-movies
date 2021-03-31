import React from 'react'

import { MOVIE_BACKDROP } from './API_URL'


const MovieElement = ({movie}) => { 
       return (
            <div className="movie">
                <img src={MOVIE_BACKDROP(movie.poster_path)} alt={movie.title} />
                <h1 className="movie-title">{movie.title}</h1>
                <p className="movie-release">{movie.release_date}</p>
            </div>
       )
    }

export default MovieElement


