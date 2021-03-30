import React from 'react'
import { Link } from "react-router-dom"

export const MovieCard = ({ title, release_date, poster_path, id}) => {
    return (
        // <Link to={`/movies/${id}`}>
            <div>
                <h1>{title}</h1> 
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt=""/>
                <p>{release_date}</p>
            </div>
        // </Link>
        
    )
}


