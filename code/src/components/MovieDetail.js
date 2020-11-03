import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { API_KEY } from '../key';

export const MovieDetail = () => {
    const { moviesId } = useParams()
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const moviesDetailUrl = `https://api.themoviedb.org/3/movie/${moviesId}?api_key=${API_KEY}&language=en-US`;
        fetch(moviesDetailUrl)
        .then(res => res.json())
        .then(json => {
            setMovies(json)
            console.log(json)
            
        })
}, [moviesId])


    return(
     <>
        <Link to ="/" exact='true'>
        <p> here goes the info about the movies</p>
        </Link>
    
    </>
    )
}