import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { API_KEY } from './key';
import { Movie } from './Movie'

export const MovieDetails = () => {
    const { id } = useParams();
    const MOVIE_DETAILS = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&page=1`;
    const [movies, setMovies] = useState([]);

    useEffect(() => {
    fetch(MOVIE_DETAILS)
        .then((res) => res.json())
        .then((json) => {
            setMovies(json)
        })
    }, [MOVIE_DETAILS]);

    return  (
    <section className="movie-details">          
            <Movie {...movies}/>
            
        </section>
    );   
};

export default MovieDetails