import React from 'react'

import { MOVIE_BACKDROP } from './API_URL'

import { Link, useParams } from 'react-router-dom'

// Ska vi inte skriva in t ex ({ poster_path, title, release_date }) i MovieElement
const MovieElement = ({movie}) => { 

    const { slug } = useParams()



       return (
           <Link to='/'>
                <div className="movie">
                    <img src={MOVIE_BACKDROP(movie.poster_path)} alt={movie.title} />
                    <h1 className="movie-title">{movie.title}</h1>
                    <p className="movie-release">{movie.release_date}</p>
                </div>
            </Link>
       )
    }


export default MovieElement


