import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const MovieList = () => {
    const [movies, setMovies] = useState ([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=27e8fb9e6ffba8008ad2d8ac7babadb3&language=en-US&page=1')
            .then(res => res.json())
            .then(json => {
                setMovies(json.results)
            })
    }, [])



    return (
        <div>
            {movies.map(movie => (
                <Link key={movie.id} to={`/movie/${movie.id}`} >
                <div >
                    <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
                    <h2>{movie.title}</h2>
                </div>
                </Link>
            ))}
        </div>
    )
}