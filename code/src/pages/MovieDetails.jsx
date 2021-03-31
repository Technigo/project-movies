import React, { useEffect, useState} from 'react'
import { useParams, Link } from "react-router-dom"

import { FaChevronCircleLeft } from 'react-icons/fa';


import './MovieDetails.css'


export const MovieDetails = () => {
    const { id } = useParams()
    console.log(id)

    const [movies, setMovies] = useState([])

    const MOVIE_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=d1212c48c1a2b13b12dd27882d072960&language=en-US`
    
    useEffect(() => {
        fetch(MOVIE_URL)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                setMovies(json)
            })

    }, [MOVIE_URL])


    return (
        <div >
            
            <img className='background-image' src={`https://image.tmdb.org/t/p/w1280${movies.backdrop_path}`}/>
            <Link className="back-arrow" to={`/`}>
                <FaChevronCircleLeft/>
                <span className="icon-text">Movies</span>
            </Link>
            <div className="movie-details-container">
                <img src={`https://image.tmdb.org/t/p/w342${movies.poster_path}`}/>
                <div className="movie-details">
                    <h1>{movies.original_title} <span className="votes"> {movies.vote_average}/10</span></h1>
                    <p>{movies.overview}</p>
                </div>
            </div>
        </div>
    )
}

