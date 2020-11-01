import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MOVIES_URL } from 'urls';
import { MovieDetail } from 'pages/MovieDetail';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  // const API_KEY = 02cab8b4b7310d0ffe039e2925a86d1b;

  useEffect(() => {
    fetch(MOVIES_URL)
    .then(res => res.json())
    .then(json => {
      setMovies(json.results)
    })
  }, [])

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`} alt={movie.title}/>
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <MovieDetail title={movie.title} image={movie.image} description={movie.overview} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;