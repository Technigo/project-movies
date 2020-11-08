import React from 'react';
import { Link } from 'react-router-dom'

import './movieThumb.css'

export const MovieThumb = ({ name, background_image, release, id }) => {
    return (
        <Link to={`/movie/${id}`}>
        <section className="movie-thumb">
            
            <div className="movie-thumb-image-wrapper">
                <img className="movie-thumb-image" src={`http://image.tmdb.org/t/p/w500/${background_image}`} alt={name} />
                <h1>{name}</h1>
                <p className="movie-thumb-release"> {release} </p>
            </div>
            </section>
            </Link>
    
    );
};