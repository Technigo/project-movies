import React from 'react';
import { Link } from 'react-router-dom';

import './FilmCard.css'

export const FilmCard = ({
    poster_path,
    title,
    release_date,
    id
}) => {
    return (
        <Link to={`/films/${id}`}>
            <article className="film-card">
                <div className="film-card-overlay">
                    <h1>{title}</h1>
                    <p>Released {release_date}</p>
                </div>
                <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="{title} film poster" />
            </article>
        </Link>
    );
};