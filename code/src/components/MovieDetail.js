import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { API_KEY } from '../key';

export const MovieDetail = () => {
    const { movieId } = useParams()
    const [movies, setMovies] = useState([])
    const DETAILS_API = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`

    useEffect(() => {
        fetch(DETAILS_API)
        .then((response) => response.json())
        .then((json) => {
            setMovies(json)
            console.log(json)
        })
}, [movieId, DETAILS_API])


    return(
     <>
        <Link to ="/" exact='true'>
        <p> here goes the info about the movies</p>
        </Link>

        <img className="movie-card-image" 
          src={`https://image.tmdb.org/t/p/w1280${movies.backdrop_path} `} alt={`${`original_title`}poster`}  />   
       <div>
        <h1>{movies.title}</h1>
            <p>{movies.vote_average}/10</p>
            <p>{movies.overview}</p>
            <p>{movies.tagline}</p>
        </div>
    
    </>
    )
}