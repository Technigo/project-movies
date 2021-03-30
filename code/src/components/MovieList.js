import React, { useState, useEffect } from 'react'
import  MovieThumb from './MovieThumb'


const MovieList = () => {
    const MOVIES_URL = "https://api.themoviedb.org/3/movie/popular?api_key=861b3e525c686b0bf8dcb25d1d1213f6&language=en-US&page=1"
    const [movies, setMovies] = useState([]);

useEffect(() => {
    fetch(MOVIES_URL)
     .then(response => response.json())
     .then(json => setMovies(json.results))
}, []);

return (
    <>
    <section className="movie-list">
        {movies.map(movie => <MovieThumb {...movie} /> )}
    </section>
    </>
) 
}

export default MovieList