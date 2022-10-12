/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { Orbit } from '@uiball/loaders';
import { Link } from 'react-router-dom'

export const TVseries = () => {
  const [tvShow, setTvShow] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/tv/popular?api_key=124871c87c46d6e667f133342d66de5c&language=en-US')
      .then((res) => res.json())
      .then((json) => setTvShow(json.results))
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
    <div className='tv-series'>
      <h1>Popular Tv-Shows</h1>
      {tvShow.map((show) => (
        <Link key={show.id} to={`/Tv-series/${show.id}`}>
          <img src={`https://image.tmdb.org/t/p/w342${show.poster_path}`} alt={show.title} />
          <div className='details'>
            <h1>{show.title}</h1>
            <p>Released {show.first_air_date}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

