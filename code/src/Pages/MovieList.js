import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { API_URL } from '../urls';
import Header from '../Components/Header'

const MovieList = () => {

    const [movieList, setMovieList] = useState([]);
    const [choosenAPI, setChoosenAPI] = useState(API_URL);

    useEffect(() => {
        fetch(choosenAPI)
            .then(response => response.json())
            .then(data => {
                setMovieList(data.results)
            })
    }, [choosenAPI]);

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
                            to={`/movies/${movie.id}`}
                            className="movie-wrapper"
                            key={movie.id}
                        >
                            <div className="movie-image-overlay"></div>
                            <div className="movie-start-info-container">
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

export default MovieList;