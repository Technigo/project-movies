import React from 'react'
import { Link } from 'react-router-dom'

export const MovieCard = ({id, title, release_date, poster_path}) => {
    return (
        <Link to={`/movies/${id}`}>
            <section className='movie-cards'>
                <div className='card-overlay'>
                    <h1>{title}</h1>
                    <p className='release-date'>{release_date}</p>
                </div>

                <div className='movie-cards-wrapper'>
                    <img className='movie-image' src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt={title}></img>
                </div>
            </section>
        </Link>
    )
}