/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Orbit } from '@uiball/loaders';
import { TVSHOW_DETAILS_URL } from 'utils/Urls';

export const TvSeriesDetails = () => {
  const [tvShow, setTvShow] = useState([])
  const [loading, setLoading] = useState(true);
  const { id } = useParams()

  useEffect(() => {
    fetch(TVSHOW_DETAILS_URL(id))
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
    <section className='tvPage'>
      <Link to='/TV-series' className='backLink'>
        <div className='back'>
          <img src='/icons/back-icon.svg' id='back-icon' alt='back' />
          <p>TV-shows</p>
        </div>
      </Link>
      <div className='background' style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${tvShow.backdrop_path})` }}>
        <article className='tvshow-details'>
          <div className='details'>
            <img src={`https://image.tmdb.org/t/p/w342${tvShow.poster_path}`} className='detail-img' alt={tvShow.title} />
            <div className='detail-text'>
              <h1>{tvShow.name}<span className='ratings'><img src='/icons/star-icon.svg' id='star-icon' alt='rating' />{Math.round(tvShow.vote_average * 10) / 10}</span></h1>
              <p>{tvShow.overview}</p>
              <div className='collection'>
                <Link to={`/seasons/${id}`}>All seasons <img
                  src='/icons/more-icon.svg'
                  id='more-icon'
                  alt='more' />
                </Link>
              </div>
            </div>
          </div>

        </article>
      </div>
    </section>
  );
}