import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { MOVIES_URL } from '../urls';
import Header from '../Components/Header';
import Movie from '../Components/Movie';

const MovieList = () => {

    const [movieList, setMovieList] = useState([]);
    const [choosenAPI, setChoosenAPI] = useState(MOVIES_URL);

    useEffect(() => {
        fetch(choosenAPI)
            .then(response => response.json())
            .then(data => {
                setMovieList(data.results)
            })
    }, [choosenAPI]);

    // Reach the url choosen in movie details
    const reachAPIValue = (apiURL) => {
        setChoosenAPI(apiURL)
    }
   
    return (
        <>
            <Header reachAPIValue={reachAPIValue} />
            <main className="movies-container">
                {movieList.map((movie) => {
                    return (
                        <Link
                            to={`/movie/${movie.id}`}
                            className="movie-wrapper">
                            <div className="movie-image-overlay"></div>
                            <div className="movie-start-info-container">
                                <h1>{movie.title}</h1>
                                <p>Released {movie.release_date}</p>
                            </div>
                            <img
                                className="movie-image"
                                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                                alt={movie.title}>
                            </img>
                        </Link>
                    )
                })}
            </main>
        </>
    ) 
}

export default MovieList;
