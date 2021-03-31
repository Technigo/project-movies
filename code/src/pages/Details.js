import React, {useState, useEffect} from 'react'

import { MOVIE_DETAIL_URL, MOVIE_BACKDROP } from '../components/API_URL'

import { Link, useParams } from 'react-router-dom'





export const Details = ({movie}) => {
    const { id } = useParams()
        console.log(id)
    const [ Details, setDetails ] = useState({})
    
    const fetchMovieDetails = () => {
        fetch(MOVIE_DETAIL_URL(id)) 
        .then(res => res.json())
        // .then(json => console.log(json))
        .then(json => setDetails(json.results))
        .catch(err => console.error(err))
    }

    useEffect(() => {     
        fetchMovieDetails()   
    }, [])

    console.log(movie)

    return (
        <>
                <h1>{movie.title}</h1>
        </> 
    )
}