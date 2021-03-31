import React from "react"
import { Link } from "react-router-dom"


export const MovieThumb = ({ poster_path, original_title, release_date, id }) => {
    return (
        <Link to={`/movies/${id}`}>
            <section className="movie-thumb">
                <img src = {`https://image.tmdb.org/t/p/w300${poster_path}`} alt={original_title}/>
                <h1>{original_title}</h1>
                <h3>{release_date}</h3>
            </section>
        </Link>    
    )
} 