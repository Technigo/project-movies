import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
    const { movieId } = useParams()
    const [movies, setMovies] = useState([])

    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=de0e6f6f34bb3f7060237da93b37b9e0&language=en-US&page=1/${movieId}`)
        .then((res) => res.json())
        .then((json) => {
          setMovies(json.results)
        })
    }, [movieId])

    return (
      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <h1>{movie.title}</h1>
          </div>
        ))}
      </div>
    )
};