import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { apiKey } from "key"


export const MoviesHome = () => {
    const [movies, setMovies] = useState([])

    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    console.log(URL)

    useEffect(() => {
        fetch(URL)
            .then((res) => res.json())
            .then((json) => {
                setMovies(json.results)
            });
    }, []);

    return (
        <div className="movies-container">
            {movies.map((movie) => (
                <div className="movie-wrapper" key={movie.id}>
                    <Link to={`movies/${movie.id}`}>
                        <div className="movie-info">
                            <h4 className="movie-title">{movie.original_title}</h4>
                            <div>
                                <img src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}