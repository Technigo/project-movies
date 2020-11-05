import React, { useEffect, useState } from "react";
import Loader from 'react-loader-spinner'

import { baseAPI, apiKey } from "config";
import { MovieCard } from "../components/MovieCard";

export const MoviesList = () => {
    const moviesUrl = `${baseAPI}movie/popular?api_key=${apiKey}&language=en-US&page=1`;

    const [movies, setMovies] = useState([]);
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)
        fetch(moviesUrl)
            .then(response => response.json())
            .then(json => setMovies(json.results))
            .finally(() => setLoader(false))
        // eslint-disable-next-line 
    }, [])

    return loader
        ? <Loader
            type="Hearts"
            color="red"
            height={400}
            width={400}
            className="loader" />
        : <section className="movies-list">
            {movies.map((movie) =>
                <MovieCard key={movie.id} {...movie} />
            )}
        </section>
}