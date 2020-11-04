import React from 'react'
import { Link } from 'react-router-dom'

import { MoviePoster } from './MoviePoster'
import "./css/MovieList.css"

export const MovieList = ({ movies }) => {
    return (
        <section className='movie-list'>
            {
                movies.map(movie => {
                    return (
                        <Link key={movie.id} to={`/movies/${movie.title}`}>
                            <MoviePoster {...movie} />
                        </Link>
                    )
                })
            }
        </section>
    )
}