import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import "../css/List.css"


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
      <div className="movieList">
          {movies.map((movie) => (
            <Link to={`/movies/${movie.id}`}>
            <div key={movie.id}>
                <img
                    src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                    alt={movie.title}
                />
                <div className="listDetails">
                  <h1>{movie.title}</h1>
                  <p>Released {movie.release_date}</p>
                </div>   
            </div>
            </Link>
          ))}
      </div>
  )
}

export default List