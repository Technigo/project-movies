import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { DETAILS_URL } from '../utils/urls'

const MovieDetails = () => {
  const params = useParams()
  const [details, setDetails] = useState({})

  useEffect(() => {
    fetch(DETAILS_URL)
      .then((res) => res.json())
      .then((data) => setDetails(data))
  }, [])

  return (
    <>
      <div>{details.name}</div>
        <div>
          <button>
          Return to Movielist
        </button>
      </div>
    </>
  )
}


export default MovieDetails