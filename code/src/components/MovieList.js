import React, { useEffect, useState } from 'react'

import { MovieCard } from 'components/MovieCard'

export const MovieList = () =>{
    const API_KEY= '43463ccceed97e5556886a2d1c302174'
    const MOVIES_URL= `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    const [movies, setMovies]= useState([]);

    useEffect(() =>{
        fetch(MOVIES_URL)
            .then(resp => resp.json())
            
            .then((json) =>  setMovies(json.results));
           
    }, []);

    return (
    <section className='movie-list'> 
        {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
     ))}
    
    </section>
    )}
