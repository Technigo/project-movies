import React from 'react';
import { Link } from "react-router-dom";

const MovieCards = ({movies}) => {
    return (
        <section className="movie-cards">
            {movies.map((movie) => (
                <Link className="link-container" key={movie.id} to={`/moviedetails/${movie.id}`} >
                    <div className="img-container">
                        <img 
                            className="movie-poster"
                            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                            alt={movie.title}
                        />
                    </div>
                    <div className="info-container">
                        <h3
                            className="movie-title">
                            {movie.title}
                        </h3>
                        <p>Release date {movie.release_date}</p>
                    </div>
                </Link>
            ))}
        </section>      
    )
}

export default MovieCards;
