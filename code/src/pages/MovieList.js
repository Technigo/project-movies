import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { POPULAR_API_URL } from '../reusable/urls'

export const MovieList = () => {
    const [movieList, setMovieList] = useState([])

    useEffect(() => {
    fetch(POPULAR_API_URL)
        .then((res) => res.json())
        .then(json => {
            setMovieList(json.results)
        })
        .catch(err => console.error(err))
    }, [])

    return (
        <>
        <section className="movie-list-container">
            {movieList.map((movie) => (
                <Link to={`/movies/${movie.id}`} key={movie.id} className="movie-card-container">
                    <img className="poster-image" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.original_title}/>
                        <div className="image-overlay-text">
                            <h1>
                                {movie.original_title}
                            </h1>
                            <h2>
                                {movie.release_date}
                            </h2>
                        </div>
                </Link>
            ))}
        </section>
        </>
    )
}