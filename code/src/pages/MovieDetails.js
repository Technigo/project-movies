/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Orbit } from '@uiball/loaders';
import { MOVIES_DETAILS_URL } from 'utils/Urls';

export const MovieDetails = () => {
  const [details, setDetails] = useState([])
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    fetch(MOVIES_DETAILS_URL(id))
      .then((res) => res.json())
      .then((json) => { setDetails(json) })
      .catch((error) => alert(error, 'error'))
      .finally(() => setLoading(false));
  }, [id])

  const goBack = () => {
    navigate(-1);
  }

  if (loading) {
    return (
      <div className='loading-container'>
        <h2>Loading..</h2>
        <Orbit size={40} speed={0.9} color='F9F9F9' />
      </div>
    );
  }

  return (
    <section className='detailsPage'>
      <button type='button' className='backLink' onClick={goBack}>
        <img src='/icons/back-icon.svg' id='back-icon' alt='back' />
        <p>Movies</p>
      </button>
      <div className='background' style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${details.backdrop_path})` }}>
        <article className='movie-details'>
          <div className='details'>
            <img src={`https://image.tmdb.org/t/p/w342${details.poster_path}`} alt={details.title} />
            <div className='detail-text'>
              <h1>{details.title} <span className='ratings'><img src='/icons/star-icon.svg' id='star-icon' alt='rating' />{Math.round(details.vote_average * 10) / 10}</span></h1>
              <p>{details.overview}</p>

              {details.belongs_to_collection !== null
        && <div className='collection'>
          <Link to={`/collection/${details.belongs_to_collection.id}`}>More from this collection <img src='/icons/more-icon.svg' id='more-icon' alt='more' /></Link>
        </div>}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
