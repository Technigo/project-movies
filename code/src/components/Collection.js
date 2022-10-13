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
      <h1>{collections.name}</h1>
      <div className='collection-container'>
        {collections.map((movies) => {
          return (
            <>
              <h1
                key={movies.title}
                className='list-element'>{movies.title}
              </h1>
              <p key={movies.id}>{movies.overview}</p>
            </>
          )
        })}
      </div>
    </section>

  )
}