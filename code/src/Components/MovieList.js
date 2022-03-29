import React, { useEffect, useState } from 'react'
import { MOVIES_API } from './utils/urls'

const MovieList = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => { 
        fetchMovies()
    }, [])

    const fetchMovies = () => {
        fetch(MOVIES_API)
        .then(res => res.json())
        .then(data => setMovies(data.results))
    }

    // console.log(movies)

    return (
        <section className='main-container'>
            {movies.map((movie) => (
                <div key={movie.id} className='movie-container'>
                    <div className="hover-group">
                        <h1 className='movie-title'>{movie.title}</h1>
                        <p className="release-date">{movie.release_date}</p>
                    </div>
                    <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="movie poster"/>
                </div>
            ))}
        </section>
    )
}

export default MovieList