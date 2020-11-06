import React, { useEffect, useState } from 'react';
import { API_KEY } from './key';
import { MovieThumb } from './MovieThumb'

export const Trending = () => {
    const TRENDING = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
    const [trending, setTrending ] = useState([]);

    useEffect(() => {
        fetch(TRENDING)
        .then((res) => res.json())
        .then((json) => {
            setTrending(json.results)
        });
    }, []);

    return (
        <section className="movie-list">
            {trending.map((movie) => (
                <MovieThumb key={movie.id} {...movie} />
            ))}
        </section>
    );
};