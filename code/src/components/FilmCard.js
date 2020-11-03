import React from 'react';
import { Link } from 'react-router-dom';

export const FilmCard = ({
    poster_path,
    title,
    release_date,
    id
}) => {

    return (
        <Link to={`/movies/${id}`}>
            <article>
                <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} />
                <h1>{title}</h1>
                <p>Released {release_date}</p>
            </article>
        </Link>
    );
};