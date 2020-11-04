import React, { useEffect, useState } from 'react'

import { MovieCard } from './MovieCard'

export const MovieList = () => {
const MOVIE_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=0677b30458d017f7d0769e3f86ddb54e'
const [movies, setMovies] = useState([])  

    useEffect(() => {
        fetch(MOVIE_URL)
        .then((response) => response.json())
        .then((json) => setMovies(json.results))
    }, [] )
    
    return (
        <section className='movie-list'>
            {movies.map((movie) => movie.title)}
            <MovieCard />
        </section>
    )
}