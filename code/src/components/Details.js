import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { APIKEY, MOVIEDETAILS } from 'Urls.js/url'

const Details = () => {
  const [details, setDetails] = useState([])
  const { movie_id } = useParams()

  useEffect(() => {
    fetch(MOVIEDETAILS(APIKEY, movie_id))
      .then((res) => res.json())
      .then((data) => setDetails(data))
  }, [])
  // console.log(data)

  return <section className="movie-details-list"></section>
}

export default Details
