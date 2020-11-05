import React, { useState, useEffect } from 'react'
import { MovieInfo } from 'components/MovieInfo'


import { apiKey } from "key"
import "./moviesHome.css"
import "index.css"

export const MoviesHome = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
        fetch(URL)
            .then((res) => res.json())
            .then((json) => {
                setLoading(false)
                setMovies(json.results)
            })
            .catch((error) => {
                console.error('Bad request', error)
            })
    }, [movies, loading]);
    return (
        <div className="movies-container">
            {loading && <div className="loader" />}
            {movies.map((movie) => (
                <MovieInfo key={movie.id} {...movie} />
            ))}
        </div>
    );
};