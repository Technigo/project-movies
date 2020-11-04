import React , { useState, useEffect } from 'react'
// import React from 'react'
import { useParams } from 'react-router-dom';

import { API_KEY } from '../urls';

export const MovieDetails = () => {
    const { id } = useParams()
    const MOVIE_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetch(MOVIE_URL)
            .then(response => response.json())
            .then((json) => {
                console.log(json)
                setMovie(json)
              })
            
           }, [MOVIE_URL])
           
           const backgroundImage = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
    return(
        <main className="movie-detail-page" style={{backgroundImage:  `url(${backgroundImage})`}}>
         <section className="movie-details">
        
        <h1>{movie.title}</h1>        
        <p>{movie.overview}</p>
        </section>
        </main>
    )
}