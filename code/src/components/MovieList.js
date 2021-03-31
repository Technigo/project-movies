import React, { useState, useEffect } from 'react';

import { MovieCard } from './MovieCard';

import { MOVIES_URL } from '../reusables/urls';

export const MovieList = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(MOVIES_URL)
        .then(response => response.json())
        .then(json => setMovies(json.results))
        .catch(err => console.error(err))
    }, [])

    return (
      <>  
        {movies.map((movie) => (
            <MovieCard {...movie} key={movie.id} />
        ))}
      </>  
    )
}