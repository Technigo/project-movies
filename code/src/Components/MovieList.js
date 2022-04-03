import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

import Loader from 'Components/Loader'
import Header from 'Components/Header'
import { POPULAR_API } from './utils/urls'

const MovieList = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)

    

    useEffect(() => { 
        const fetchMovies = () => {
            setLoading(true)
            fetch(POPULAR_API)
            .then(res => res.json())
            .then(data => setMovies(data.results))
            .catch(error => console.error(error))
            .finally(() => setLoading(false))
        }

        fetchMovies()
    }, [])

    return (
        <>
        {loading && <Loader />}
        <Header/>
         <section className='main-container'>
            {movies.map((movie) => (
                <Link key={movie.id} to={`/moviedetails/${movie.id}`}>
                    <div key={movie.id} className='movie-container'>
                        <div className="movie-text-group">
                            <h1 className='movie-title'>{movie.title}</h1>
                            <p className="release-date">Released {movie.release_date}</p>
                        </div>
                        <img className="movielist-image" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="movie poster"/>
                    </div>
                </Link>
            ))}
        </section>
        </>
       
    )
}

export default MovieList