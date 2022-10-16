/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Orbit } from '@uiball/loaders';
import { ONCINEMA_URL } from 'utils/Urls';

export const Oncinema = () => {
  const [onCinema, setOnCinema] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch(ONCINEMA_URL)
      .then((res) => res.json())
      .then((json) => setOnCinema(json.results))
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
    <section className='onCinemaPage'>
      <h1 className='on-cinema'>On cinema right now</h1>
      <div className='movies-container'>
        {onCinema.map((releases) => (
          <article className='movie-wrapper' key={releases.id}>
            <Link key={releases.id} to={`/movies/${releases.id}`}>
              <img src={`https://image.tmdb.org/t/p/w342${releases.poster_path}`} alt={releases.title} />
              <div className='details'>
                <h1>{releases.original_title}</h1>
                <p>Release date {releases.release_date}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
