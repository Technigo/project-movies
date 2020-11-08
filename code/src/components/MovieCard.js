import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

export const MovieCard = () => {
    const { id } = useParams ()
    const {movie, setMovie} = useState ([])

    useEffect (() => {
     

    return (
        <section className="movie-thumb">
            {movie.original_title}
            <div className ="movie-thumb-wrapper">
            <img className="movie-thumb-image" src="./" alt={movie.original_title} />
            <p className="movie-thumb-description">{movie.overview}</p>
            </div>
        </section>
    )
    
};