import React from "react";
import { Link } from "react-router-dom";
import './MovieList.css'

const movieList = ({ movies }) => {
return (
    <section className="container">
    {movies.map((movie) => (
        <Link to={`/movies/${movie.id}`}>
        <div className="overlay"key={movie.id}>
        
            <img
            className="image"
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt="{movie.poster_path}"
            ></img>

        <div className="movie-details">
            <h1>{movie.title}</h1>
            <p>{movie.release_date}</p>
        </div>
        </div>
        </Link>
        ))}
    ;
    </section>
);
};
export default movieList;
