import React from 'react'
import { Link } from 'react-router-dom'

import { MoviePoster } from './MoviePoster'

export const MovieList = ({ movies }) => {
    return (
        <section className='movie-list'>
            {
                movies.map(movie => {
                    return (
                        <Link to={`/movies/${movie.title}`}>
                            <MoviePoster key={movie.id} {...movie} />
                        </Link>
                    )
                })
            }
        </section>
    )
}