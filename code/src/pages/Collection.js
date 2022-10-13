/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { COLLECTION_URL } from 'utils/Urls'

export const Collection = () => {
  const [collections, setCollections] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetch(COLLECTION_URL(id))
      .then((res) => res.json())
      .then((data) => setCollections(data.parts))
      .catch((error) => alert(error, 'error'))
  }, [id])

  return (
    <section className='collections'>
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