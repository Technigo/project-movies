import React, { useEffect, useState } from "react";


import { baseAPI, apiKey } from "config";
import { MovieCard } from "../components/MovieCard";





export const MoviesList = () => {

    const moviesUrl = `${baseAPI}movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(moviesUrl)
            .then(response => response.json())
            .then(json => setMovies(json.results))
    }, [])


    return (
        <section className="movies-list">
            {movies.map((movie) =>
                <MovieCard {...movie} />
            )}
        </section>
    )
}