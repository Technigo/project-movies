import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const API_KEY = '2ff070f81f8c9206d9426765e063f416';

export const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${params.movieID}?api_key=${API_KEY}&language=en-US`)
     .then((response) => response.json())
     .then((json) => {
       setMovie(json)
     })
  }, [params.movieID])

  return (
    <>
      <Link to="/" exact="true">
        <p>Back to Movies List</p>
      </Link>
      <div className="movie-details-page">
        <img src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`} alt={movie.original_title} />
        <h2>{movie.original_title}</h2>
        <p>{`${movie.vote_average} / 10`}</p>
        <p>{movie.overview}</p>
        <img width="300px" src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`} alt={movie.original_title} />
      </div>
    </>
  )
};

//backdrop as background, access backdrop: src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}