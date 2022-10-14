/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Orbit } from '@uiball/loaders';
import { UPCOMING_URL } from 'utils/Urls';

export const Upcoming = () => {
  const [upcoming, setUpcoming] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch(UPCOMING_URL)
      .then((res) => res.json())
      .then((json) => setUpcoming(json.results))
      .catch((error) => alert(error, 'error'))
      .finally(() => setLoading(false));
  }, [])

  if (loading) {
    return (
      <>
        <h2>Loading..</h2>
        <Orbit size={40} speed={0.9} color='#F9F9F9' />
      </>
    );
  }
  return (
    <section className='upcomingPage'>
      <h1 className='upcoming-header'>Upcoming movies</h1>
      <div className='movies-container'>
        {upcoming.map((movie) => (
          <article className='movie-wrapper' key={movie.id}>
            <Link key={movie.id} to={`/movies/${movie.id}`}>
              <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
              <div className='details'>
                <h1>{movie.title}</h1>
                <p>Release date {movie.release_date}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}