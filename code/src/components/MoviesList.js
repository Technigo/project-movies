import React from "react";
import { Link } from 'react-router-dom';

const MoviesList = ({ films }) => {
    return (
        <>
        {films.map((movie) => (
            <Link to={`/details/${movie.id}`}>
            
                <div className="overlay"></div>
                <div key={movie.id} className="movie-container">
                    <div className="hover-movie">
                        <h1>{movie.original_title}</h1>
                        <p>{movie.release_date}</p>
                    </div>
                <img src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`} alt="picture"/>   
                </div>
            </Link>
            
        ))}          
        </>
    )
};

export default MoviesList;