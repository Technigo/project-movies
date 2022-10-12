/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Orbit } from '@uiball/loaders';
import { Seasons } from 'components/Seasons'

export const TvShowDetails = () => {
  const [tvShow, setTvShow] = useState([])
  const [loading, setLoading] = useState(true);
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=124871c87c46d6e667f133342d66de5c&language=en-US`)
      .then((res) => res.json())
      .then((data) => { setTvShow(data) })
      .catch((error) => alert(error, 'error'))
      .finally(() => setLoading(false));
  }, [id])

  if (loading) {
    return (
      <>
        <h2>Loading..</h2>
        <Orbit size={40} speed={0.9} color='black' />
      </>
    );
  }

  return (
    <section className='tvshow-details'>
      <Link to='/TV-series' className='backLink'>
        <img src='/icons/back-icon.svg' id='back-icon' alt='back' />Tv-Show
      </Link>
      <div className='details' key={tvShow.id}>
        <h1>{tvShow.name}</h1>
        <h2><img src='/icons/star-icon.svg' id='star-icon' alt='rating' />{Math.round(tvShow.vote_average * 10) / 10}</h2>
        <a href={tvShow.homepage} className='homepage'>
          <img src={`https://image.tmdb.org/t/p/w342${tvShow.backdrop_path}`} alt={tvShow.title} />
        </a>
        <h3>Summary</h3>
        <p>{tvShow.overview}</p>
        <Seasons />

      </div>
    </section>
  );
}
