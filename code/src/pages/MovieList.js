import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom' 

import '../styles/MovieList.css'

const API_KEY = '2df2062fe6afeadacbfc1fd0a84167fa'
const MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    fetch(MOVIES_URL)
    .then(response => response.json())
    .then(json => {
      setMovies(json.results)
      console.log(json.results);
    })
  }, [])
  
  return (
    <div className="list-movie-wrapper"> 
      {movies.map((movie) => (
        <> 
          <Link className="list-movie-item" to={`movie/${movie.id}`} key={movie.id}> 
            <img 
              className="list-movie-poster" 
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} 
              alt={movie.title} />
            <div className="list-details-wrapper"> 
              <h2 className="list-title">{movie.title}</h2>
              <p className="list-release">Release date: {movie.release_date}</p>
            </div>
          </Link>
        </>
      ))}
    </div>
  );
};
export default MovieList; 