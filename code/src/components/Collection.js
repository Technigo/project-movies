/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

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
      <h1>{collections.name}</h1>
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

  )
}

/* {collections.map((item) => (

<div key={item.id} className='collection-movie'>
  <h1>{item.parts.map((movie) => movie.title)}</h1>
</div>

))}
</div> */