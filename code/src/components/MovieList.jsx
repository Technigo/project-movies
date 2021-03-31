import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'


import { MovieCard } from './MovieCard'

import './MovieList.css'


export const MovieList = () => {
   const MOVIE_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=d1212c48c1a2b13b12dd27882d072960&language=en-US&page=1' 

   const [movies, setMovies] = useState([])

   useEffect(() => {
       fetch(MOVIE_URL)
        .then(res => res.json())
        .then(json => setMovies(json.results))
   },[])

   return (
    <>
       <section className="movie-list-container">
        {movies.map(movie => (
            <Link key={movie.id} to={`/movie/${movie.id}`}>
                <MovieCard 
                    {...movie} 
                />
            </Link>          
        ))}
       </section>
   </>
   )
}