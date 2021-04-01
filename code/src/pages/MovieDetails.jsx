import React, { useEffect, useState } from 'react'
import { useParams, Link, useHistory } from "react-router-dom"

import { FaChevronCircleLeft } from 'react-icons/fa';


import './MovieDetails.css'


export const MovieDetails = () => {
    const { id } = useParams()
    const history = useHistory();
    const [movies, setMovies] = useState([])

    const MOVIE_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=d1212c48c1a2b13b12dd27882d072960&language=en-US`
    
    useEffect(() => {
        fetch(MOVIE_URL)
            .then((res) => res.json())
            .then((json) => {
                (json.success === false) ? history.push('/') : setMovies(json)
            })
            .catch((error) => console.log(error))
    }, [MOVIE_URL, history])

    

    return (
            <div >
                <div className='background-image' style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w1280${movies.backdrop_path})`
                }}></div>
                <Link className="back-arrow" to={`/`}>
                    <FaChevronCircleLeft/>
                    <span className="icon-text">Movies</span>
                </Link>
                <div className="movie-details-container">
                    <img src={`https://image.tmdb.org/t/p/w342${movies.poster_path}`} alt={movies.original_title}/>
                    <div className="movie-details">
                        <h1>{movies.original_title} <span className="votes"> {movies.vote_average}/10</span></h1>
                        <p>{movies.overview}</p>
                    </div>
                </div>
            </div>
    )
}

