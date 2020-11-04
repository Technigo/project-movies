import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


export const MoviesHome = () => {
    const [moviesHome, setMoviesHome] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=b6825bdbb7b9954f3681e277e9c3e68c&language=en-US&page=1')
            .then(res => res.json())
            .then(data => setMoviesHome(data.results))
    })

    return (
        <div className="movies-container">
            {moviesHome.map(movie => (
                <div className="movie-wrapper">
                    <Link to={`movie/${movie.id}`}>
                        <div className="movie">
                            <img src={movie.background_image} alt={movie.name} />
                            <div className="movie-name">{movie.name}</div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}