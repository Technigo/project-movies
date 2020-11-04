import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './popularList.css'

export const PopularList = () => {
  const [movies, setMovies] = useState([])
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=de0e6f6f34bb3f7060237da93b37b9e0&language=en-US&page=1")
      .then((res) => res.json())
      .then((json) => {
      setMovies(json.results)
    })
  }, [])

  return (
    <div className="list-container">
      {
        movies.map((movie) => (
          <div 
            className="list-card" 
            key={movie.id}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            {
              isShown && 
              <div className="list-text">
                <h2>{movie.title}</h2>
                <h3>Released {movie.release_date}</h3>
              </div>
            }
            <Link to={`/title/${movie.id}`}>
             <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt={movie.title} />
            </Link>
          </div>
        ))
      }
    </div>
  )
};