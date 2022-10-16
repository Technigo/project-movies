/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { COLLECTION_URL } from 'utils/Urls'
import { Orbit } from '@uiball/loaders';

export const Collection = () => {
  const [collections, setCollections] = useState([])
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  // eslint-disable-next-line camelcase
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    fetch(COLLECTION_URL(id))
      .then((res) => res.json())
      .then((data) => setCollections(data.parts))
      .catch((error) => alert(error, 'error'))
      .finally(() => setLoading(false));
  // eslint-disable-next-line camelcase
  }, [id])

  const goBack = () => {
    navigate(-1);
  }

  if (loading) {
    return (
      <div className='loading-container'>
        <h2>Loading..</h2>
        <Orbit size={40} speed={0.9} color='#F9F9F9' />
      </div>
    );
  }

  return (
    <section className='collectionsPage'>
      <button type='button' className='backLink' onClick={goBack}>
        <img src='/icons/back-icon.svg' id='back-icon' alt='back' />
        <p>Back</p>
      </button>

      {collections.map((movies) => {
        return (
          <div className='collection-container' key={movies.id}>
            <h1 className='list-element'>{movies.title}
            </h1>
            <p>{movies.overview}</p>
          </div>
        )
      })}
    </section>

  )
}