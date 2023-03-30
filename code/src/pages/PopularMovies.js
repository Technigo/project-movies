import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'components/Loader';

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=52f9f6dc03440f8be0c16de930243dfe&language=en-US&page=1')
      .then((res) => res.json())
      .then((data) => { setMovies(data.results) })
      .catch((e) => console.error(e))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <Loader />
    );
  }

  return (
    <section className="popular-movies-section">
      <h1>Popular Movies</h1>
      <div className="movie-grid-container">
        {movies.map((movie) => {
          return (
            <article className="movie-article" key={movie.id}>
              <Link
                key={movie.id}
                to={`/movies/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} alt={movie.title} />
                <div className="movie-details">
                  <h1>{movie.title}</h1>
                  <p>{movie.release_date}</p>
                </div>
              </Link>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default PopularMovies;