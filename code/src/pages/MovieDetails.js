import React, { useState, useEffect } from 'react'

import { DETAILS_URL } from 'reusable/urls'

export const MovieDetails = () => {
  const [details, setDetails] = useState([])

  useEffect(() => {
    fetch(DETAILS_URL(movieId))
      .then((res) => res.json())
      .then((data) => {
        setDetails(data)
       
      })
  }, [])
return(
  <div>
    <h2>`${movieId}`</h2>
  </div>
)

}