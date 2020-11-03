import React from 'react';

import { Movie } from './Movie';

import '../styles/movielist.css';

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