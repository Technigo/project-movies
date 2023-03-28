/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const MovieList = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=986aaac98bfe3b83f202c023b975310e&language=en-US&page=1')
            .then((res) => res.json())
            .then((json) => {
                setMovies(json.results)
            })
    }, [])
    return (
        <div className="ListPage">
            {movies.map((movie) => (
                <Link key={movie.id} to={`/movies/${movie.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`} alt={movie.title} />
                    <h1 className="movie-title">{movie.title}</h1>
                    <h2 className="release-date">Release date: {movie.release_date}</h2>
                </Link>
            ))}
        </div>
    )
}