import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { api_key } from 'Urls';
import { BackButton } from 'components/BackButton';

import 'styles/moviedetails.css';

export const MovieDetails = () => {
    //Using useParams hook to get the id for the path to each movie
    const { id } = useParams(); 

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`)
            .then((response) => response.json())
            .then((json) => {
                setMovie(json);
            })
            .catch((error) => {
                console.error('Error: Request failed', error)
            })
    }, [id]);

    return (
        <main 
            className='movie-details__background'
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 60%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`}}
        >
        <BackButton />
            <section className='movie-details__container'>
                <img 
                    className='movie-details__poster'
                    src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt={movie.title}
                />
                <div className='movie-details__info'>
                    <div className='movie-details__title-rating'>
                        <h2> {movie.title} </h2>
                        <span className='movie-details__rating'> 
                        {movie.vote_average}/10 
                        </span>
                    </div>
                    <p className='movie-details__overview'> {movie.overview} </p>
                </div>
            </section> 
        </main>
    );
};