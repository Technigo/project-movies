import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import '../style/MovieDetails.css'

import { API_KEY } from 'reuseables/APIs';

export const MovieDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([]);
    const MOVIE_DETAILS_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`

useEffect(() => {
    fetch(MOVIE_DETAILS_URL)
        .then((res) => res.json())
        .then((json) => setDetails(json))
    
}, [MOVIE_DETAILS_URL]);

    return (
        <section className="movie-details-container">
            <img 
            src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`} 
            alt={details.title} 
            />
            <div className="poster-container">
                <img 
                className="movie-poster-image"
                src={`https://image.tmdb.org/t/p/original/${details.poster_path}`} 
                alt={details.title} />
                <div>
                <h1>{details.title}</h1>
                <p>{details.vote_average}/10</p>
                <p>{details.overview}</p>
                </div>
            </div>
        </section>
        )
}

