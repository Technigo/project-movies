import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

import Header from 'Components/Header'
import { MOVIES_API } from './utils/urls'

const MovieList = () => {
    const [movies, setMovies] = useState([])
    

    useEffect(() => { 
        const fetchMovies = () => {
            fetch(MOVIES_API)
            .then(res => res.json())
            .then(data => setMovies(data.results))
        }

        fetchMovies()
    }, [])

    return (
        <>
        <Header/>
         <section className='main-container'>
            {movies.map((movie) => (
                <Link key={movie.id} to={`/moviedetails/${movie.id}`}>
                    <div key={movie.id} className='movie-container'>
                        <div className="hover-group">
                            <h1 className='movie-title'>{movie.title}</h1>
                            <p className="release-date">{movie.release_date}</p>
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