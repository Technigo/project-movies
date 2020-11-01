import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { API_URL } from '../urls';
import Header from './Header'

const MoviesList = () => {

    const [moviesList, setMoviesList] = useState([]);
    const [choosenAPI, setChoosenAPI] = useState(API_URL);

    useEffect(() => {
        fetch(choosenAPI)
            .then(response => response.json())
            .then(data => {
                setMoviesList(data.results)
                console.log(data)
            })
    }, [choosenAPI]);

    const reachAPIValue = (apiURL) => {
        setChoosenAPI(apiURL)
    }
   
    return (
        <>
            <Header reachAPIValue={reachAPIValue} />
            <main className="movies-container">
                {moviesList.map((movie) => {
                    return (
                        <Link
                            to={`/movies/${movie.id}`}
                            className="movie-wrapper"
                            key={movie.id}
                        >
                            <div className="movie-image-overlay"></div>
                            <div className="movie-start-info">
                                <h1>{movie.title}</h1>
                                <p>Released {movie.release_date}</p>
                            </div>
                            <img
                                className="movie-image"
                                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                                alt={movie.title}
                            >
                            </img>
                        </Link>
                    )
                })}
            </main>
        </>
    ) 
}

export default MoviesList;