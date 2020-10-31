import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { API_URL } from '../urls';

const MoviesList = () => {

    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                setMoviesList(data.results)
            })
    }, []);

    return (
            <main className="movies-container">
                {moviesList.map((movie) => {
                    return (
                        <Link
                            to={`/movies/${movie.id}`}
                            className="movie-wrapper"
                            key={movie.id}
                        >
                            <div className="movie-image-overlay"></div>
                            <div className="movie-start-info">
                                <h1>{movie.title}</h1>
                                <p>Released {movie.release_date}</p>
                            </div>
                            <img
                                className="movie-image"
                                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                                alt={movie.title}
                            >
                            </img>
                        </Link>
                    )
                })}
            </main>
    ) 
}

export default MoviesList;