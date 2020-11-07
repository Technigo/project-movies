import React, { useState } from 'react';
import { movies_url } from 'Urls';
import { MovieThumb } from 'components/MovieThumb';

export const MovieList = () => {
    const [ movies, setMovies] = useState([]);

    fetch(movies_url)
        .then((response) => response.json())
        .then((json) => setMovies(json.results));
 
        // Using .map() to render the list of movies
    return (
        <section className='movies-list'>
            {movies.map((movie) => (
                 <MovieThumb key={movie.id} title={movie.title} poster={movie.poster_path}/>
            ))}
        </section>
    );
};