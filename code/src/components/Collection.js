/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export const Collection = () => {
  const [collections, setCollections] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/collection/${id}?api_key=12f0d4f0075ee3d1ab7e1bc82f5a355c&language=en-US`)
      .then((res) => res.json())
      .then((data) => setCollections(data.parts))
      .catch((error) => alert(error, 'error'))
  }, [id])

  return (
    <div className='collections'>
      {collections.map((movies) => {
        return (
          <>
            <Link key={movies.id} to={`/movies/${movies.id}`}>
              <h1
                key={movies.title}
                className='list-element'>{movies.title}
              </h1>
            </Link>
            <p key={movies.id}>{movies.overview}</p>
          </>
        )
      })}
    </div>

  )
}