import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export const PopularList = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
      fetch("https://api.themoviedb.org/3/movie/popular?api_key=de0e6f6f34bb3f7060237da93b37b9e0&language=en-US&page=1")
        .then((res) => res.json())
        .then((json) => {
          setMovies(json.results)
      })
    }, [])

    return (
      <div>
          {movies.map((movie) => (
              <div key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                    <Link to={`/title/${movie.id}`}>
                      <h2>{movie.title}</h2>
                    </Link>
                    <h3>Released {movie.release_date}</h3>
                    <h2>{movie.vote_average} / 10</h2>
              </div>
          ))}
      </div>
    )
};