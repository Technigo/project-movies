import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { API_KEY } from '../urls';

const MovieDetails = () => {
    const [MovieDetails, setMovieDetails] = useState({});
    const { movieId } = useParams();
    //console.log(movieId);

    useEffect(() => {
        const DETAILS_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
        
        fetch(DETAILS_URL)
            .then(response => response.json())
            .then(json => setMovieDetails(json));
    }, [movieId])

    return (
        <section className="movie-details">
        </section>
    )
       
}

export default MovieDetails;