import React, {useState, useEffect} from 'react'

import { MOVIE_DETAIL_URL, MOVIE_BACKDROP } from './API_URL'

export const MovieDetails = ({movie}) => {

    const [ movieDetails, setMovieDetails ] = useState({})
    
    const fetchMovieDetails = () => {
        fetch(MOVIE_DETAIL_URL(movie.id)) 
        .then(res => res.json())
        // .then(json => console.log(json))
        .then(json => setMovieDetails(json.results))
        .catch(err => console.error(err))
    }

    useEffect(() => {     
        fetchMovieDetails()   
    }, [])

    console.log(movie)

    return (

       <h1>{movie.title}</h1>
        
    )







}