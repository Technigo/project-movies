import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const Collection = () => {
  const [collections, setCollections] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/collection/${id}?api_key=12f0d4f0075ee3d1ab7e1bc82f5a355c&language=en-US`)
      .then((res) => res.json())
      .then((json) => { setCollections(json) })
      .catch((error) => alert(error, 'error'))
  }, [id])

  return (
    <div className='collections'>
      <h1>{collections.name}</h1>
      <p> försökte mappa parts för att få fram alla filmer i collectionen
        här dååå meen funkar eeeej. samma issue som genressss
      </p>
    </div>
  )
}

/* {collections.map((item) => (

<div key={item.id} className='collection-movie'>
  <h1>{item.parts.map((movie) => movie.title)}</h1>
</div>

))}
</div> */