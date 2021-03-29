import React, { useEffect, useState} from 'react'

import { MovieCard } from './MovieCard'

import { MOVIE_URL } from '../reusables/urls'



export const MovieList = () => {
/*     const API_KEY = 'e90c1322becf61268c0c0fea570c7099';
    const MOVIE_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`; */
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

        <section>
            {movies.map((movie) => (
            <MovieCard {...movie} key={movie.original_title}/>
            ))}
        </section>
    )
}