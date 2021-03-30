import React from 'react'
import { useState, useEffect } from 'react'

import { MOVIE_LIST_URL, MOVIE_DETAIL_URL, MOVIE_BACKDROP } from './API_URL'

import { MovieTable } from './MovieTable'

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

        console.log(movieList)

    return (
        <>
        <MovieTable {...movie} />

        </>
    )
}