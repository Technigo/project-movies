import React, { useEffect, useState} from 'react';

import { URL } from '../reusables/urls'

import MovieThumb from './MovieThumb.js'

const MovieList = () => {
    
    const [movies, setMovies] = useState([]);
    
    useEffect (() => {
        fetch(URL)
        .then(response => response.json())
        .then(receivedMovies => setMovies(receivedMovies.results))
    },[])
    //console.log (movies)
    
    return (
        <div className="movies-container"> 
           {movies.map(movie => <MovieThumb key={movie.id} {...movie}/>)}
            
        </div>
    )
}

export default MovieList;