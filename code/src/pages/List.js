import React, { useEffect, useState } from "react";

import { MOVIES_URL } from '../utils/urls'

const List = () => {
const [movies, setMovies] = useState([])

useEffect (() => {
    fetch(MOVIES_URL)
    .then ((res) => res.json())
    .then ((json) => {
        console.log(json.results)
        setMovies(json.results)
    })
    }, [])

    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <div key={movie.id}>
                    <h1>{movie.title}</h1>
                    <p>Released {movie.release_date}</p>
                    <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title}/>
                </div>
            ))}
        </div>
    
    )
}


export default List