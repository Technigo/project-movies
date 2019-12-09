import React, { useEffect, useState } from 'react'

export const MovieList = () => {
    const [movies, setMovies] = useState([])

useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=3812b9925d12c2723ac148f3607b8bb5&language=en-US&page=1')
        .then((res) => res.json())
        .then((json) =>{
            setMovies(json.results)
        })
}, [])

    return (
        <div>
            {movies.map((movie) => (
                <div>
                    <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.original_title} />
                    <h2>{movie.original_title}</h2>
                    <h3>{movie.release_date}</h3>
                </div>
            ))}
        </div>
    )
}

