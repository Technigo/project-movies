import React from 'react'
import { Link } from 'react-router-dom'

export const MovieDetails = ({title, overview, vote_average}) => {

    return (
        <section className='movie-details'>
            <Link to='/'>
                <p>Back</p>
            </Link>
            <img alt='backdrop'></img>
            <img alt='poster'></img>
            <h3>{title}</h3>
            <p>{vote_average} / 10</p>
            <p>{overview}</p>
        </section>
    )
}