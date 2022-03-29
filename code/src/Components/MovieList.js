import React from "react";
import { Link } from "react-router-dom";

export const MovieList = ({movieList}) => {

    console.log(movieList)

    return(
        <section className="main">
            {movieList.map((movie) => (
                <div className="movie-wrapper">
                <Link 
                    to={`/details/${movie.id}`}
                    className="movie"
                    key={movie.id}>
                    <img className="poster-img"src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="movie poster"/>
                </Link>
                    <div className="overlay">
                      <h1>{movie.title}</h1>
                      <p>released: {movie.release_date}</p>
                    </div>
                </div>   
            ))}
        </section>
    )
}