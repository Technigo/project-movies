import React, { useState, useEffect } from 'react'

import { MOVIE_LIST_URL } from './API_URL'

import MovieElement from './MovieElement'


export const Home = () => {
const [ movieList, setMovieList ] = useState([])
 
    const fetchMovieList = () => {
        fetch(MOVIE_LIST_URL) 
            .then(res => res.json())
            .then(json => setMovieList(json.results))
            .catch(err => console.error(err))
    }

    useEffect(() => {     
        fetchMovieList()   
    }, [])
    
    return (
        <div className="movie-list-container">    
            {movieList.map(movie => {  
                return (
                    <MovieElement {...movie} /> 
                )
            })}
        </div>
    )
}