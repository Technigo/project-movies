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
                    <div className="title-button">
                        <h1 className="title">{title}</h1>
                        <svg className="arrow" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                    </div>
                    <div>
                        <p className="released">Released {release_date}</p>
                    </div>
                </div>
                <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="{title} film poster" />
            </article>
        </Link>
    );
};