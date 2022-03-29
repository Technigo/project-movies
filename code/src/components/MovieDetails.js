import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const API_KEY = 'c3172ec38bb05890b52b6288d18c7b8e';

const MovieDetails = () => {
  const [movies, setMovies] = useState({})
  const { movieId } = useParams();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
      .then(res => res.json())
      .then(data => setMovies(data))
  }, [movieId])


  return (
    <div
      className='backdrop-image'
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movies.backdrop_path})` }}
    >
      <Link to={"/"}>
        <button>Movies</button>
      </Link>
      <img
        key={movies.title}
        src={`https://image.tmdb.org/t/p/w300${movies.poster_path}`}
        alt="movie posters"
      ></img>
      <h1>{movies.title}</h1>
      <p>{movies.vote_average}/10</p>
      <p>{movies.overview}</p>
    </div>
  )
}

export default MovieDetails;