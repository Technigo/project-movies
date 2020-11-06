import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';

import { API_KEY } from '../urls';
import '../styles/MovieDetails.css'

export const MovieDetails = () => {
    const { id } = useParams()
    const MOVIE_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    const [movie, setMovie] = useState({});

    useEffect(() => {
        fetch(MOVIE_URL)
            .then(response => response.json())
            .then((json) => {
                console.log(json)
                setMovie(json)
            })

    }, [MOVIE_URL])

    const backgroundImage = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
    return (
        <main className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Link to="/" className="back-link"> 
                <div className="link-text">
                    <i class="fas fa-chevron-circle-left"></i>
                    <h3>Movies</h3>
                </div>
             </Link> 
        <section className="movie-detail-page" > 
            <article className="details-container">
                <img className="details-poster" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
                <div className="details">
                    <h1 className="title">{movie.title} <span className="vote">{movie.vote_average} / 10</span></h1>
                    <p>{movie.overview}</p>
                </div>
            </article>
        </section>
        </main>
    )
}