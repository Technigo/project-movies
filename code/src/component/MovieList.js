import React, { useState, useEffect } from 'react'

import { MovieContainer } from 'component/MovieContainer';
import { Nav } from 'component/Nav'

export const MovieList = ({ list }) => {
    const [movies, setMovies] = useState([]);

    const API_KEY = '7a8b8f73f0f19bc86674c69db87cbbc7'
    const MOVIE_URL = `https://api.themoviedb.org/3/movie/${list}?api_key=${API_KEY}&language=en-US&page=1`;
  
    const fetchMovies = () => {
      fetch(MOVIE_URL)
          .then(res => res.json())
          .then(data => setMovies(data.results))
          .catch(error => console.error(error));
    }

    useEffect(fetchMovies, [list]);

    return (
        <>
            <Nav /> 
            <section className="movie-list">
                {movies.map(movie => {
                    return (
                        <MovieContainer 
                            key={movie.id}
                            title={movie.title}
                            release={movie.release_date}
                            poster={movie.poster_path}
                            backdrop={movie.backdrop_path}
                            overview={movie.overview}
                            id={movie.id}
                        />
                    )
                })}
            </section>
        </>
    )
}