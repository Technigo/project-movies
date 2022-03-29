import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'; 

import { ALL_MOVIES_URL } from "../utils/urls"


import './PopularList.css'


const PopularList = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetch(ALL_MOVIES_URL)
      .then((res) => res.json())
      .then((resJson) => {
        setMovies(resJson.results);
      })
  }, [])


  const movieElements = movies.map((movie) => {
    return (
      <div className="movies-wrapper">
        <Link to={`/movie/${movie.id}`}>
            <img className="movie-img" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} />
          <h2>{movie.original_title}</h2>
          <p>Release date:{movie.release_date}</p>
        </Link>
      </div>
    )
  })
  return (
    <section className="popular-movies">
      {movieElements}
    </section>
  )
}


export default PopularList

