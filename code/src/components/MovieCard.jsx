import React from 'react'

import './MovieCard.css'


export const MovieCard = ({ title, release_date, poster_path}) => {
    return (
            <> 
                <img className ='card-image' src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt=""/>
                <div className="title-date">   
                    <h1>{title}</h1>
                    <p>Released {release_date}</p>
                </div> 
            </>
    )
}