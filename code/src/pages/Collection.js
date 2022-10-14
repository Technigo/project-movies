/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { COLLECTION_URL } from 'utils/Urls'
import { Orbit } from '@uiball/loaders';

export const Collection = () => {
  const [collections, setCollections] = useState([])
  const [loading, setLoading] = useState(false);
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    fetch(COLLECTION_URL(id))
      .then((res) => res.json())
      .then((data) => setCollections(data.parts))
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
    <section className='collectionsPage'>
      <Link to='/' className='backLink'>
        <div className='back'>
          <img src='/icons/back-icon.svg' id='back-icon' alt='back' />
          <p>Movies</p>
        </div>
      </Link>
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