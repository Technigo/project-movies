import React, { useEffect, useState } from 'react'

export const App = () => {

  const [allMovies, setAllMovies] = useState([]);
  console.log(allMovies)
  
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=ee5e4399bb9b4b26410c80fdb1ecdd56&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=14&page=1", {
      method: "GET"
    })
    .then(response => response.json())
    .then(movies => setAllMovies(movies.results))
  }, [])

  
  return (
    <article className="allMovies">
      {allMovies.map(movie => (
        <a className="movie-item" key={movie.id}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie poster"></img>
        <div className="movie-details" key={movie.id}>
          <h2>{movie.title}</h2>
          <p>Released: {movie.release_date}</p>
        </div>
        </a>
      ))}
      
    </article>
  )
    
  }

// "https://api.themoviedb.org/3/discover/movie?api_key=ee5e4399bb9b4b26410c80fdb1ecdd56&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=14&page=1"