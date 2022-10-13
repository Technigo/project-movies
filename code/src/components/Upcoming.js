/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Orbit } from '@uiball/loaders';
import { UPCOMING_URL } from 'utils/Urls';

export const Upcoming = () => {
  const [upcoming, setUpcoming] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
        <Orbit size={40} speed={0.9} color='black' />
      </>
    );
  }
  return (
    <div className='upcoming'>
      <h1>Upcoming movies</h1>

      {upcoming.map((movie) => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
          <h1>{movie.title}</h1>
          <p>Release date {movie.release_date}</p>
        </Link>
      ))}
    </div>
  )
}