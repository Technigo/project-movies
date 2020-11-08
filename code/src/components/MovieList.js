import React, { useState, useEffect } from 'react';

import { movies_url } from 'Urls';

import { MovieThumb } from 'components/MovieThumb';

import 'styles/movielist.css';


export const MovieList = () => {
    const [ movies, setMovies] = useState([]);

    // Fetching list of movies from API
    useEffect(() => {
        fetch(movies_url)
            .then((response) => response.json())
            .then((json) => setMovies(json.results));
        }, []);
        
    /* Using .map() to render the list of movies,
    mounting MovieThumb-components, showing each movie in a section on the page */
    return (
        <section className='movie-list'>
            {movies.map((movie) => (
                 <MovieThumb key={movie.id} {...movie}/>
            ))}
        </section>
    );
};