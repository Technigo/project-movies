import React from 'react'
import './Movie.css'

export const Movie = ({
    title,
    backdrop_path,
    overview,
    vote_average,
    poster_path,
}) => {
    return (
        <main
        className="backdrop"
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${backdrop_path})`}}>
        <div>
        <h1>{title}</h1>
        <img src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
        alt={title} />
        <span className="rating">{vote_average}/10</span>
        <p>{overview}</p>
        <img className="backdrop" src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}/>
        </div>
        </main>
    )
}