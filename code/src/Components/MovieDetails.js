import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { API_KEY } from 'urls';

const MovieDetails = () => {
    const { id } = useParams();
    const MOVIE_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetch(MOVIE_URL)
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
    });
    console.log(id)
    return (
        <p>Helloooo</p>
    )
}

export default MovieDetails;