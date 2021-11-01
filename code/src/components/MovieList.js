import React from 'react'
import { Link } from 'react-router-dom'

const MovieList = ({ movie }) => {
    return (
        <section>
            {movie.map((movie) => (
                <Link key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
                    <h3>{movie.title}</h3>
                    <p>Released: {movie.release_date}</p> 
                </Link>
            ))}
        </section>
    )
}

export default MovieList
