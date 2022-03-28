import React, { useState, useEffect } from "react";
import { MovieCards } from 'components/MovieCards';

export const Overview = () => {
const [movies, setMovies] = useState([]);

useEffect(() => {
fetchMovies();
}, []);

const Handlemovies = (event) => {
    setMovies(event.target.value)
}

const fetchMovies = () => {
fetch('https://api.themoviedb.org/3/movie/popular?api_key=e99c6c8e9d657c50fc40ffe9db9d16f5&language=en-US&page=1') 
.then(res  => res.json())
.then(data => setMovies(data));

}
return (
    <main>
        {MovieCard.map(movies => ( 
            <MovieCards
            key={movies.id}
                
                movies={movies}
            />
        ))}
    </main>
    )
}

export default Overview;
