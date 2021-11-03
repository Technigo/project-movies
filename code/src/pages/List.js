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
        <div>
            <h1>hej hopp</h1>
            {movies.map((movie) => (
                <div key={movie.id}>
                    <h2>{movie.title}</h2>
                    <img src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`} alt="imagesmovies"/>
                </div>
            ))}
        </div>
    
    )
}


export default List