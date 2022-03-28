import React from "react";
import { Link } from "react-router-dom";

export const MovieList = ({movieList}) => {
    return(
        <section className="main">
            {movieList.map((movie) => (
                <Link 
                    to={`/details/${movie.id}`}
                    className="movie"
                    key={movie.id}>
                    <img className="poster-img"src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} />
                </Link>
            ))}
        </section>
    )
}