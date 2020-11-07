import React, { useState, useEffect } from 'react';

import { POPULAR_LIST_URL } from '../urls';
import Movie from './Movie';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(POPULAR_LIST_URL)
        .then((response) => response.json())
        .then((json) => setMovies(json.results));
    },[])  
 
    return (
        <section className="movie-list">
            {movies.map((movie) => (
                    <Movie key={movie.id} {...movie}/>
            ))}
        </section>
    )

}


export default MovieList;