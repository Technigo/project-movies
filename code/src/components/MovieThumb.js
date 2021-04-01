import React from "react"
import { Link } from "react-router-dom"


export const MovieThumb = ({ poster_path, original_title, release_date, id }) => {
    return (
        <Link to={`/movies/${id}`}>
            <div className="movie-thumb">
                <img src= {`https://image.tmdb.org/t/p/w300${poster_path}`} alt={original_title}/>
                <h1>{original_title}</h1>
                <h2>{release_date}</h2>
            </div>
        </Link>    
    )
} 