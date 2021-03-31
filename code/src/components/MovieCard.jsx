import React from 'react'
import { Link } from "react-router-dom"

import './MovieCard.css'

export const MovieCard = ({ title, release_date, poster_path, id}) => {
    return (
            <div className="movie-poster"> 
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt=""/>
                <div className="title-date">   
                    <h1>{title}</h1>
                    <p>{release_date}</p>
                </div> 
            </div>
    )
}