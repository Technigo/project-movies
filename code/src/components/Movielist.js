import React from "react";
import { Link } from "react-router-dom";

const movieList = ({ movies }) => {
return (
    <section className="popular-wrapper">
    {movies.map((movie) => (
        <div key={movie.id}>
        <Link to={`/movies/${movie.id}`}>
            <img
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt="{movie.poster_path}"
            ></img>
        </Link>

        <div className="movie-details">
            <h1>{movie.title}</h1>
            <p>{movie.release_date}</p>
        </div>
        </div>
        ))}
    ;
    </section>
);
};
export default movieList;
