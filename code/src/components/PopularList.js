import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { API_URL, POSTER_URL } from '../utils/urls'
import Loader from './Loader'

const PopularList = () => {
    const [popularMovies, setPopularMovies] = useState()

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => setPopularMovies(data.results))
    }, [])

    if (popularMovies === undefined) {
        return (<Loader />)
    }

    return (
        <section className="popular-list">
            {popularMovies.map(movie => (
                <Link className="movie-wrapper" to={`/movies/${movie.id}`} key={movie.id} >
                    <img src={POSTER_URL(movie.poster_path)} alt={movie.title} />
                    <div className="details">
                        <h2>{movie.title}</h2>
                        <p>Released {movie.release_date}</p>
                    </div>
                </Link>
            ))}
        </section>
    )
}

export default PopularList