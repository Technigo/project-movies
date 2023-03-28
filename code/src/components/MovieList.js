import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(movieList)
    setLoading(true);
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=95ef8b2227f45566b4eecd3687c10466&language=en-US&page=1')
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data.results)
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setLoading(false);
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) {
    return (
      <p>loading...</p>
    )
  }

  return (
    <div className="movie-container">
      {movieList.map((movie) => (
        <Link
          key={movie.id}
          to={`/moviedetails/${movie.original_title}`}>
          <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="poster" />

          <div className="cover-title">
            <h1>{movie.original_title}</h1>
            <h3>Released {movie.release_date}</h3>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default MovieList;