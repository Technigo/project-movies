/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { TVSHOW_DETAILS_URL } from 'utils/Urls'
import { Orbit } from '@uiball/loaders';

export const Seasons = () => {
  const [season, setSeason] = useState([])
  const [loading, setLoading] = useState(false);
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    fetch(TVSHOW_DETAILS_URL(id))
      .then((res) => res.json())
      .then((data) => setSeason(data.seasons))
      .catch((error) => alert(error, 'error'))
      .finally(() => setLoading(false));
  }, [id])

  if (loading) {
    return (
      <div className='loading-container'>
        <h2>Loading..</h2>
        <Orbit size={40} speed={0.9} color='#F9F9F9' />
      </div>
    );
  }

  return (
    <section className='seasonsPage'>
      <Link to='/' className='backLink'>
        <div className='back'>
          <img src='/icons/back-icon.svg' id='back-icon' alt='back' />
          <p>Back</p>
        </div>
      </Link>
      <div className='seasons-container'>
        {season.map((show) => {
          return (
            <article className='seasons-wrapper' key={show.id}>
              <img src={`https://image.tmdb.org/t/p/w342${show.poster_path}`} alt={show.title} />
              <div className='details'>
                <h1>{show.name}</h1>
                <p>Episodes: {show.episode_count}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>

  )
}
