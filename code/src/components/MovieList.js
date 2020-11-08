import React, { useState, useEffect } from 'react';

import { movieList_url } from 'Urls';

import { MovieThumb } from 'components/MovieThumb';

import 'styles/movielist.css';


export const MovieList = () => {
    const [ movieList, setMovieList] = useState([]);

    // Fetching list of movies from API
    useEffect(() => {
        fetch(movieList_url)
            .then((response) => response.json())
            .then((json) => setMovieList(json.results));
        }, []);
        
    /* Using .map() to render the list of movies,
    mounting MovieThumb-components, showing each movie in a section on the page */
    return (
        <section className='movie-list'>
            {movieList.map((movie) => (
                 <MovieThumb key={movie.id} {...movie}/>
            ))}
        </section>
    );
};