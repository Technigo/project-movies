import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { API_KEY } from '../urls';

const MovieDetails = () => {
    const [MovieDetails, setMovieDetails] = useState({});
    const { movieId } = useParams();

    useEffect(() => {
        const DETAILS_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
        
        fetch(DETAILS_URL)
            .then(response => response.json())
            .then(json => setMovieDetails(json));
    }, [movieId])

    return (
        <section className="movie-details" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%) ,url(https://image.tmdb.org/t/p/w1280${MovieDetails.backdrop_path})`}}>
            <Link className="back-link" to="/" exact="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z" fill="#fff" fill-rule="evenodd"></path></svg>
                 Movies
            </Link>
            <div className="movie-details-background">
                <div className="movie-details-summary-container">
                    <img 
                        className="movie-details-image" 
                        src={`https://image.tmdb.org/t/p/w342${MovieDetails.poster_path}`} 
                        alt={MovieDetails.title}
                    />
                    <div className="movie-details-text-box">
                        <h4 className="movie-title">{MovieDetails.title}</h4>
                        <p className="movie-rating">{MovieDetails.vote_average}</p>
                        <p className="movie-overview">{MovieDetails.overview}</p>
                    </div>
                </div>
            </div>  
        </section>
    )    
}

export default MovieDetails;