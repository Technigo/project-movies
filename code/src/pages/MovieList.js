import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const MovieList = () => {
    const [movies, setMovies] = useState([])

useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=3812b9925d12c2723ac148f3607b8bb5&language=en-US&page=1')
        .then((res) => res.json())
        .then((json) => {
            setMovies(json.results)
        })
}, [])

    return (
        <div>
            {movies.map((movie) => (
                <div key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.original_title} />
                        <h3>{movie.release_date}</h3>
                        <h2>{movie.original_title}</h2>

                    </Link>
                </div>
            ))}
        </div>
    )
}

