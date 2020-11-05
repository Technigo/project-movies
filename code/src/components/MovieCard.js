import React from 'react'
import { Link } from 'react-router-dom'

export const MovieCard = ({id, title, release_date, poster_path}) => {
    return (
        <Link to={`/movies/${id}`}>
            <div className='movie-cards'>
                <div className='movie-overlay'>
                    <img className='movie-image' src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}></img>                
                        <div className='text-overlay'>
                            <div className='movie-text'>
                                <h1>{title}</h1>
                                <p className='release-date'>Released {release_date}</p>
                            </div>
                        </div>
                </div>
            </div>
        </Link>
    )
}