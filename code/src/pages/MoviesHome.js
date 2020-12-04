import React, { useState, useEffect } from 'react'
import { MovieInfo } from 'components/MovieInfo'


import { apiKey } from "key"
import "./moviesHome.css"
import "index.css"

export const MoviesHome = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
        fetch(URL)
            .then((res) => res.json())
            .then((json) => {
                setMovies(json.results)
            })
            .catch((error) => {
                console.error('Bad request', error)
            })
    }, []);

    return (
        <div className="movies-container">
            {movies.map((movie) => (
                <MovieInfo key={movie.id} {...movie} />
            ))}
        </div>
    );
};