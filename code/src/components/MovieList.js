import React from "react";
import "./MovieList.css"
import { Link } from "react-router-dom";

const MovieList = ({ movieId, poster, title, date }) => {
    const moviePoster = `https://image.tmdb.org/t/p/w300${poster}`

    return (
        <div className="movies-overview">
            <Link key={movieId} to={`movie/${movieId}`}>
                <img src={moviePoster} alt={title} />
                <div className="details">
                    <h1 className="movie-title">{title}</h1>
                    <p>Released {date}</p>
                </div>
            </Link>

        </div>
    )
}

export default MovieList