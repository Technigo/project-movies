import React from 'react';

import { IMAGE_URL } from './URLS';

import '../styles/movie.css';

/* The idea is to use props to display 
movie-titles and images from different endpoints
of the API */
export const Movie = ({title, poster_path}) => {
    return ( 
        <section className='movie__card'>
            <h2>{title}</h2>
            <img src={`${IMAGE_URL}${poster_path}`} alt={title}/>
        </section>
    );
};