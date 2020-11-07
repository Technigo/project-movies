import React, { useEffect, useState } from 'react';
import { API_KEY } from'./key';
import { MovieThumb } from './MovieThumb'

export const Upcoming = () => {
    const UPCOMING = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
    const [upcoming, setUpcoming] = useState([]);

    useEffect(() => {
        fetch(UPCOMING)
        .then((res) => res.json())
        .then((json) => {
            setUpcoming(json.results)
        });
}, []);
return (
    <section className="movie-list">
        {upcoming.map((movie) => (
            <MovieThumb key={movie.id} {...movie} />
        ))}
    </section>
    );
};