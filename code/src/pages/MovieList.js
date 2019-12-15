import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './movielist.css'

export const MovieList = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=ac808c841b715d85c8914a97d10f4cb3&language=en-US&page=1`)
            .then(res => res.json())
            .then(json => {
                setMovies(json.results)
            })
    }, [])

    return (
        <div className="movieContainer">
            {movies.map((movie) => (
                <Link className="link" key={movie.id} to={`/movies/${movie.id}`}>
                    <img className="moviePoster" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
                    <div className="movieBox">
                        <h2>{movie.title}</h2>
                        <p>Released: {movie.release_date}</p>
                    </div>
                </Link>
            ))}
            )
        </div>
    )
}