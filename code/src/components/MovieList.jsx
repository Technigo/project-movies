import React, { useState, useEffect } from 'react';


import { MovieCard } from './MovieCard'
import { MovieDetails } from '../pages/MovieDetails'

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
       <section >
        {/* {movies.map(movie =>
            <MovieCard 
                {...movie} 
                key={movie.id} 
            />)} */}

        {movies.map(movie => (
            <MovieCard 
                {...movie} 
                key={movie.id}
            />,
            <MovieDetails 
                {...movie}
                key={movie.id} 
            />
        ))}
       </section>


       {/* <section>
        {movies.map((movies) => 
           <MovieDetails 
                {...movies} 
                key={movie.id} 
            />)
        } 
        
            
       </section> */}

   </>
   )
}