import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import icon from '../assets/icons8-chevron-left-64.png';

import { API_KEY } from 'urls';

const MovieDetails = () => {
    const { id } = useParams();
    

    const MOVIE_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;

    const [movie, setMovie] = useState({});

    //const moviesMatch = moviesList.find(())

    useEffect(() => {
        fetch(MOVIE_URL)
            .then(response => response.json())
            .then(data => {
                setMovie(data)
            })
    }, [MOVIE_URL]);

    // const idMatch = (movie.id === id);

    // if (!idMatch) {
    //     return (
    //         <div>Not found</div>
    //     )
    // }

    const background = `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`;
    
    return (
        <main className="movie-detail-page" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0) 20%, rgb(0,0,0) 100%), url(${background})`}}>
            <div className="info">
                <Link className="back-link" to="/">
                    <div className="back-link-wrapper">
                        <img src={icon} alt="Arrow link"></img>
                        <p>Movies</p>
                    </div>   
                </Link>
                <div className="detail-info-container">
                    <img className="movie-poster" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title}></img>
                    <div className="movie-detail-text-container">
                        <h1 className="movie-title">{movie.title} <span className="rating">{movie.vote_average} / 10</span></h1>
                        <h2>{movie.tagline}</h2>
                        <p className="overview-text">{movie.overview}</p>
                    </div>
                </div>
            </div>
        </main> 
    )
}

export default MovieDetails;