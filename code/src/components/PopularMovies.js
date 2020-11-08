import React, { useState, useEffect } from 'react'

import { POPULAR_URL } from '../urls'
import { MoviePoster } from './MoviePoster'
import '../styles/MovieList.css'

export const PopularMovies = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(POPULAR_URL)
            .then(response => response.json())
            .then(json => setMovies(json.results))
           }, [])

    return (        
         <section className="movies-list">
            {movies.map((movie) => ( 
               <MoviePoster 
                 key={movie.id} 
                  {...movie} 
                  />
        ))} 
        </section>
        
    )
}