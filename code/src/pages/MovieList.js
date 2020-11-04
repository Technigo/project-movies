import React from 'react';
import { Link } from 'react-router-dom'

import { Movie } from './Movie';
/* import { DETAILS_URL} from './URLS' */

import '../styles/movielist.css';

/* This component should show a list of movies
Each movie should be a link to a more detailed page about that specific movie */

export const MovieList = ({ movies, id }) => {

    return (
        <section className='movielist__container'>
            {movies.map((movie) => (
                <Link to={`movie/${id}`}>
                    <Movie
                        key={movie.id}
                        {...movie} />
                </Link>
            ))}
        </section>
    );
};