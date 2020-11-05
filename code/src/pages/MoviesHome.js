import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


import { apiKey } from "key"
import "./moviesHome.css"

export const MoviesHome = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
        fetch(URL)
            .then((res) => res.json())
            .then((json) => {
                setMovies(json.results)
            })
            .catch((error) => {
                console.error('Bad request', error)
            })
    }, []);
    return (
        <div className="movies-container">
            {movies.map((movie) => (
                <div className="movie-wrapper" key={movie.id}>
                    <Link to={`movies/${movie.id}`}>
                        <div className="movie-info">
                            <h2 className="movie-title">{movie.original_title}</h2>
                            <p className="release-date">Released:{movie.release_date}</p>
                        </div>
                        <div>
                            <img src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}