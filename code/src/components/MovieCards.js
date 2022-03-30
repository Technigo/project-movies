import React from 'react';
import { Link } from "react-router-dom";

const MovieCards = ({movies}) => {
    return (
        <section className="move-cards">
            {movies.map((movie) => (
                <Link key={movie.id} to={`/moviedetails/${movie.id}`} >
                    <div className="image-overlay">
                        <h3
                            className="movie-title">
                            {movie.title}
                        </h3>
                        <p>Release date {movie.release_date}</p>
                        <img 
                            className="movie-poster"
                            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                            alt={movie.title}
                        />
                    </div>
                </Link>
            ))}
        </section>      
    )
}

export default MovieCards;
