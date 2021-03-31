import React, { useState, useEffect } from 'react';

import { MOVIES_URL } from '../reuseables/APIs';


export const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(MOVIES_URL)
            .then((res) => res.json())
            .then((json) => setMovies(json.results))        
    });

    
    return (
        <>
            <section>
                {movies.map(movie => movie.title)}
            </section>
        </>
    );

}