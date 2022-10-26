import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const MovieList = ({ API_KEY }) => {
  const [movieList, setMovielist] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = () => {
    setLoading(true);
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((json) => setMovielist(json.results))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  if (loading) {
    return <h3 className="loading-text">Movies are loading..</h3>
  }

  return (
    <div className="movie-list-container">
      {movieList.map((movie) => (
        <Link key={movie.id} to={`/details/${movie.id}`}>
          <div className="overlay-container">
            <div className="title-container">
              <p className="title-text">{`${movie.original_title}`}</p>
            </div>
            <img
              className="poster"
              src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
              alt="" />
          </div>
        </Link>
      ))}
    </div>
  )
}

export default MovieList;
