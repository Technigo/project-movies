import React, { useEffect, useState } from 'react'

import { URL } from '../reusables/urls'

import MovieThumb from './MovieThumb.js'

const MovieList = ({ movieListType }) => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch(URL(movieListType))
            .then(response => response.json())
            .then(receivedMovies => setMovies(receivedMovies.results))
    }, [movieListType])
    console.log(movies)
    return (
        <div className="movies-container">
            {movies.map(movie => <MovieThumb key={movie.id} {...movie} />)}

        </div>
    )
}

export default MovieList;