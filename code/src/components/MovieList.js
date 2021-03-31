import React, { useEffect, useState} from 'react'

import { MovieCard } from './MovieCard'

import { MOVIE_URL } from '../reusables/urls'

export const MovieList = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(MOVIE_URL)
        .then(res => res.json())
        .then(json => {
            setMovies(json.results)
        })
        .catch(err => console.error(err))
    }, [])

    return (
        <>
            {movies.map((movie) => (
            <MovieCard {...movie} key={movie.id}/>
            ))}
        </>
    )
}