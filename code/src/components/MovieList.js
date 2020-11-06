import React, { useState, useEffect } from 'react'

import { MOVIES_URL } from '../urls'
import { MoviePoster } from '../components/MoviePoster'
import '../styles/MovieList.css'

export const MovieList = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(MOVIES_URL)
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