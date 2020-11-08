import React, { useEffect, useState} from 'react';
import { MovieThumb } from './MovieThumb';

import "./movieList.css";

export const MovieList = () => {
    const MOVIES_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=0cb608022c0a0fbef75881f68133d694&language=en-US&page=1';
    const [movies, setMovies] = useState([]);

    console.log('Render');

    useEffect(() => {
        fetch(MOVIES_URL)
        .then((response) => response.json())
        .then((json) => setMovies(json.results));
    }, []);

    return (
        <section className="movie-list">
            {movies.map((movie) => ( 
            <MovieThumb 
                key={movie.id}
                name={movie.title} 
                background_image={movie.poster_path}
                release={movie.release_date}
                />
             ))}
        </section>
    );
};