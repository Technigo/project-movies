import React, { useState, useEffect } from 'react'

import { MOVIES_URL } from '../urls'
import { MoviePoster } from '../components/MoviePoster'


// const API_KEY = "fe9bb5c09e9066da8266038ab1a77a26";
// const MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
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