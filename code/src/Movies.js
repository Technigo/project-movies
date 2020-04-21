import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'movies.css'


export const Movies = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=8fe2cb625158d587f8b0296620d5d249&language=en-US&page=1')
          .then(res => res.json())
          .then(json => setMovies(json.results))          
      }, [])
    
    return (
        
      <main className="movie-container">
          {movies.map((movie) => (
              <Link key={movie.id} to={`/movies/${movie.id}`}>
                <div className="movie-div"> 
                    <div className="movie-details">
                        <h1>{movie.title}</h1>
                        <p>Released {movie.release_date}</p>
                    </div>
                    <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
                </div>
              </Link> 
            ))} 
      </main>
    )
  }