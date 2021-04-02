import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import { MOVIES_URL } from "reusable/urls"



export const MovieList = () => {    
  const [movies, setMovies] = useState([])
    useEffect(() => {
      fetch (MOVIES_URL)
      .then(res => res.json())
      .then(json => setMovies(json.results))  
      .catch(err => console.error(err))   
    }, [])

    return ( 
      
        <section className="movie-list-container"> 
        
            {movies.map((movie)=> {
            return (
            <div key= {movie.id} className="movie-thumb">
              <Link to={`/movies/${movie.id}`} className="movie-card" style={{ textDecoration: 'none' }} >
                <img className="thumb-img" src= {`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.original_title}/>
                <div className="movie-thumb-text"> 
                    <h1 className="thumb-title">{movie.original_title}</h1>
                    <h2 className="release-date">Released: {movie.release_date}</h2>
                </div> 
              </Link> 
            </div>
          )})}
          
        </section>
      
    )       
}

