import React from "react";
import { Link } from "react-router-dom";

export const MovieList = ({movieList}) => {

    console.log('movielist', movieList)

    return(
        <section className="main">
            {movieList.map((movie) => (
                <Link to={`/details/${movie.id}`} className="movie-wrapper" key={movie.id}>
                <div className="movie">
                    <img className="poster-img"src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="movie poster"/>
                </div>
                    <div className="overlay">
                      <h1>{movie.title}</h1>
                      <p>released: {movie.release_date}</p>
                    </div>
                </Link>   
            ))}
        </section>
    )
}