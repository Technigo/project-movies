/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Orbit } from '@uiball/loaders';
import { Seasons } from './Seasons'

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
    <div className='background' style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${tvShow.backdrop_path})` }}>
      <section className='tvshow-details'>
        <Link to='/TV-series' className='backLink'>
          <div className='back'>
            <img src='/icons/back-icon.svg' id='back-icon' alt='back' />
            <p>TV-shows</p>
          </div>
        </Link>
        <div className='details'>
          <img src={`https://image.tmdb.org/t/p/w342${tvShow.poster_path}`} className='detail-img' alt={tvShow.title} />
          <div className='detail-text'>
            <h1>{tvShow.name}<span className='ratings'><img src='/icons/star-icon.svg' id='star-icon' alt='rating' />{Math.round(tvShow.vote_average * 10) / 10}</span></h1>
            <p>{tvShow.overview}</p>
            <div className='collection'>
              <Link to={`/Tv-series/${<Seasons id={id} />}`}>All seasons <img src='/icons/more-icon.svg' id='more-icon' alt='more' /></Link>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}