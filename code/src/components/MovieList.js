import React from 'react';

import { Movie } from './Movie';

import '../styles/movielist.css';

/* This component should show a list of movies
Each movie should be a link to a more detailed page about that specific movie */

export const MovieList = ({movies}) => {

    return (
        <section className='movielist__container'>
            {movies.map((movie) => (
              <Movie 
              key={movie.id}
              {...movie}/>
            ))}
        </section>
    );
};