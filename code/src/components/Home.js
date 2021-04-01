import React, { useState, useEffect } from 'react'

import { MOVIE_LIST_URL, MOVIE_DETAIL_URL, MOVIE_BACKDROP } from './API_URL'

import MovieElement from './MovieElement'


export const Home = () => {
const [ movieList, setMovieList ] = useState([])
 
    const fetchMovieList = () => {
        fetch(MOVIE_LIST_URL) 
        .then(res => res.json())
        // .then(json => console.log(json))
        .then(json => setMovieList(json.results))
        .catch(err => console.error(err))
    }

    useEffect(() => {     
        fetchMovieList()   
    }, [])

    console.log(movieList)
    return (
        <>    
            {movieList.map(movie => {  
                return (

                    <MovieElement                     
                    {...movie}
                     /> 
                )
            })}
        </>
    )
}