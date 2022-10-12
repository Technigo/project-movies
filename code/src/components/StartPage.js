/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Orbit } from '@uiball/loaders';

export const StartPage = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=124871c87c46d6e667f133342d66de5c&language=en-US&page=1')
      .then((res) => res.json())
      .then((json) => setMovies(json.results))
      .catch((error) => alert(error, 'error'))
      .finally(() => setLoading(false));
  }, [])

  if (loading) {
    return (
      <div className='loading-container'>
        <h2>Loading..</h2>
        <Orbit size={40} speed={0.9} color='#F9F9F9' />
      </div>
    );
  }

  return (
    <section className='startpage'>
      <h1 className='popular'>Popular movies</h1>
      <div className='movies-container'>
        {movies.map((movie) => (
          <article className='movie-wrapper' key={movie.id}>
            <Link key={movie.id} to={`/movies/${movie.id}`}>
              <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
              <div className='details'>
                <h1>{movie.title}</h1>
                <p>Released {movie.release_date}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
