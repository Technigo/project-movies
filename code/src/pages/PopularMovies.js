import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { URL_MOVIES } from 'reusable/urls'

export const PopularMovies = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(URL_MOVIES)
        .then((res) => res.json())
        .then((json) => {
            setMovies(json.results)
        })    
    }, [])

    return (
        <div className="movies">
            {movies.map((movie) => (
                <Link key={movie.id} to={`/movies/${movie.id}`}> 
                    <div className="movie-list-overlay">
                    <img className="movie-img-list"src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
                    <div className="movie-overlay">
                    <p className="movieTitle">{movie.title}</p>
                    <p className="movie-release-date">Released: {movie.release_date}</p>
                    </div>
                    </div>
                </Link>
            ))}
        </div>    
    )
}