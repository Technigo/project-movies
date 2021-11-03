import React from "react";
import "./MovieList.css"
import { Link } from "react-router-dom";

const MovieList = ({ movieId, poster, title, date }) => {
    const moviePoster = `https://image.tmdb.org/t/p/w300${poster}`

    return (
        <div className="movies-overview">
            <Link key={movieId} to={`movie/${movieId}`}>
                <img className="movie-poster" src={moviePoster} alt={title} />
                <div className="movie-details">
                    <h1 className="movie-titles">{title}</h1>
                    <p className="release-dates">Released {date}</p>
                </div>
            </Link>
        </div>
    )
}

export default MovieList