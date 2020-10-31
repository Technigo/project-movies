import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import icon from '../assets/icons8-chevron-left-64.png';

import { API_KEY } from 'urls';

const MovieDetails = () => {
    const { id } = useParams();

    const MOVIE_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;

    const [movie, setMovie] = useState({});

    useEffect(() => {
        fetch(MOVIE_URL)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setMovie(data)
            })
    }, [MOVIE_URL]);
    
    return (
        <main className="movie-detail-page">
            <Link className="startpage-link" to="/">
                    <img src={icon} alt="Arrow link"></img>
                    <p>Movies</p>
            </Link>
            <div className="movie-detail-info-container">
                <img className="movie-poster" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title}></img>
                <div className="movie-detail-text-container">
                    <h1>{movie.title}</h1>
                    <p className="vote-styling">{movie.vote_average} / 10</p>
                    <h2>{movie.tagline}</h2>
                    <p className="overview-text">{movie.overview}</p>
                </div>
            </div>
        </main> 
    )
}

export default MovieDetails;