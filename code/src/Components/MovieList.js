import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const MovieList = () => {
  const [movieList, setMovielist] = useState([]);
  const API_KEY = '0b4c9ac144793b50dd9acb3ecd05ab10'
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
    <div>
      {movieList.map((movie) => (
        <Link key={movie.id} to="/details/:movieName">
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt="" />
        </Link>
      ))}
    </div>
  )
}

export default MovieList;
