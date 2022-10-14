/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Orbit } from '@uiball/loaders';
import { TVSHOW_DETAILS_URL } from 'utils/Urls';

export const TvSeriesDetails = () => {
  const [tvShow, setTvShow] = useState([])
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    fetch(TVSHOW_DETAILS_URL(id))
      .then((res) => res.json())
      .then((data) => { setTvShow(data) })
      .catch((error) => alert(error, 'error'))
      .finally(() => setLoading(false));
  }, [id])

  const goBack = () => {
    navigate(-1);
  }

  if (loading) {
    return (
      <>
        <h2>Loading..</h2>
        <Orbit size={40} speed={0.9} color='#F9F9F9' />
      </>
    );
  }

  return (
    <section className='tvPage'>
      <button type='button' className='backLink' onClick={goBack}>
        <img src='/icons/back-icon.svg' id='back-icon' alt='back' />
        <p>TV-series</p>
      </button>
      {tvShow && (<div className='background' style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${tvShow.backdrop_path})` }}>
        <article className='tvshow-details'>
          <div className='details'>
            {tvShow.poster_path && <img src={`https://image.tmdb.org/t/p/w342${tvShow.poster_path}`} alt={tvShow.title} />}
            <div className='detail-text'>
              <h1>{tvShow.name}<span className='ratings'><span className='star'>&#x2736;</span>{Math.round(tvShow.vote_average * 10) / 10}</span></h1>
              <p> Genres:{' '}
                {tvShow.genres && tvShow.genres.map((genre) => genre.name).join(', ')}</p>
              <p>{tvShow.overview}</p>
              <div className='collection'>
                <Link to={`/seasons/${id}`}>All seasons <span className='more'>&#10148;</span></Link>
              </div>
            </div>
          </div>

        </article>
      </div>)}
    </section>
  );
}