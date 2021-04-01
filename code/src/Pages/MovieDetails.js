import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { BackButton } from '../components/BackButton';
import '../style/MovieDetails.css';
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

// if( details === undefined){
//     return <></>;
//   }

    return (
        <article className="movie-details-container">
            <Link to="/" className="back-button">
                <BackButton />
            </Link>
                {/* <div
                className="backdrop-image"
                style={{backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), 
                url(https://image.tmdb.org/t/p/original/${details.backdrop_path})`}} 
                alt={details.title}
                > */}

            <img 
            className="backdrop-image"
            src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`} 
            alt={details.title} 
            />
                <div className="poster-container">
                    <img 
                    className="poster-image"
                    src={`https://image.tmdb.org/t/p/original/${details.poster_path}`} 
                    alt={details.title} />
                    <div className="movie-infomation-container">
                        <h1>
                            {details.title} 
                        <span className="movie-rating">
                            {details.vote_average}/10
                        </span>
                        </h1>
                        <p>{details.overview}</p>
                    </div>
                </div>            
        </article>
        )
}

