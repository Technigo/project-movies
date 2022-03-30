import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import {SINGLE_MOVIES_URL} from "utils/urls" //../utils/urls?

const MovieDetails = () => {

    const [movieDetails, setMovieDetails] = useState({}); 

    const { movieId } = useParams(); 


useEffect(()=> {
    fetch(SINGLE_MOVIES_URL(movieId))
        .then(res => res.json())
        .then(data => {
            setMovieDetails(data);
}); 

}, [movieId]);



    return (
        <article>
            <div>{movieDetails.title}</div>
            <p>{movieDetails.overview}</p>
        </article>
    )
}

export default MovieDetails;