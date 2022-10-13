/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Orbit } from '@uiball/loaders';
import { NEW_RELEASES_URL } from 'utils/Urls';

export const NewReleases = () => {
  const [newReleases, setNewReleases] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(NEW_RELEASES_URL)
      .then((res) => res.json())
      .then((json) => setNewReleases(json.results))
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
    <div className='new-releases'>
      <h1>On cinema right now</h1>

      {newReleases.map((releases) => (
        <Link key={releases.id} to={`/movies/${releases.id}`}>
          <img src={`https://image.tmdb.org/t/p/w342${releases.poster_path}`} alt={releases.title} />
          <h1>{releases.orignail_titel}</h1>
          <p>Release date {releases.release_date}</p>
        </Link>
      ))}
    </div>
  )
}
