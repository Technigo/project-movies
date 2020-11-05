import React, { useEffect, useState } from 'react';
import { MovieThumb} from './MovieThumb';

export const MovieList = () => {
    const MOVIE = `https://api.themoviedb.org/3/movie/now_playing?api_key=2fe46756497dd387b1c58889ecdd2fe2&language=en-US&page=1`;
    const [movies, setMovies] = useState([]);

    useEffect(() => {
    fetch(MOVIE)
        .then((response) => response.json())
        .then((json) => setMovies(json.results));
    }, [MOVIE]);

        return (
        <section className="movie-list">
            {movies.map((movie) => (
            <MovieThumb key={movie.id} {...movie} />
            ))}
        </section>
    );
};

export default MovieList
