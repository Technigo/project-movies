/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { Orbit } from '@uiball/loaders';
import { Link } from 'react-router-dom'
import { TVSHOW_URL } from 'utils/Urls';

export const TVseries = () => {
  const [tvShow, setTvShow] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch(TVSHOW_URL)
      .then((res) => res.json())
      .then((json) => setTvShow(json.results))
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
    <section className='tvSeriesPage'>
      <h1 className='popular'>Popular TV-series</h1>
      <div className='movies-container'>
        {tvShow.map((show) => (
          <article className='movie-wrapper' key={show.id}>
            <Link key={show.id} to={`/Tv-series/${show.id}`}>
              <img src={`https://image.tmdb.org/t/p/w342${show.poster_path}`} alt={show.name} />
              <div className='details'>
                <h1>{show.name}</h1>
                <p>Released {show.first_air_date}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

