import React from "react";
import { Link } from "react-router-dom";

export const MovieCard = ({ poster_path, title, release_date, id }) => {
    return (
        <Link className="card-container" to={`/movie/${id}`}>
            <img className="card-container__img" src={`https://image.tmdb.org/t/p/w1280${poster_path}`} alt={title} />
            <div className="card-container__details">
                <h1>{title}</h1>
                <h3>Released {release_date}</h3>
            </div>
        </Link>
    )
}