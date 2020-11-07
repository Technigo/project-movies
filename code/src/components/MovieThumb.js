import React from 'react';
import { Link } from 'react-router-dom';

export const MovieThumb = ({ id, title, release_date, poster_path }) => {
    
    /* Thumbnail for movies, linking to movie details page */
    return (
        <Link to={`/movies/${id}`}>
            <section className='movie-thumb'>
                <h1 className='movie-thumb__title'> {title} </h1>
                    <p className='movie-thumb__released'> Released: {release_date} </p>
                    <img 
                        className='movie-thumb__poster' 
                        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                        alt={title} 
                    />
            </section>
        </Link>
    );
};