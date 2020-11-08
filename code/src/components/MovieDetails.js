import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { API_KEY } from './key';
import { Movie } from './Movie';
import { Error } from './Error';
import { Loader } from './Loader';

export const MovieDetails = () => {
    const { id } = useParams();
    const MOVIE_DETAILS = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&page=1`;
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
    fetch(MOVIE_DETAILS)
        .then((res) => res.json())
        .then((json) => {
            setMovies(json);
        })
        .catch((error) => { 
        })

    }, [MOVIE_DETAILS]);

    useEffect(() => {
        setLoading(false);
    }, [movies]);

    if (loading === true) {
        return (
            <Loader />
        )

    } else if (movies.backdrop_path === undefined) {
        return (
            <Error />
        )

    } 
        return  (
        <section className="movie-details">          
                <Movie {...movies}/>
                
            </section>
        );   
    
};

export default MovieDetails