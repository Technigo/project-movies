import React from 'react'
import { Link } from 'react-router-dom'
import "./MovieThumb.css"

const MovieThumb = ({original_title, id, poster_path, release_date}) => {
    return (
        <Link to={`/movies/${id}`}>
            <section className="movie-thumb-wrapper">
                <img className="movie-thumb-img" src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={original_title}/>
                <div className="movie-thumb-content">
                    <h1 className="movie-thumb-title">{original_title}</h1>
                    <p className="movie-thumb-date">{release_date}</p>
                </div>
            </section>
        </Link>
    )
}

export default MovieThumb
