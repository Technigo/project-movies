import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DETAILS_URL } from "../utils/urls"

const Details = () => {
  const [details, setDetails] = useState({})
  const { movieId } =  useParams() //access parameters from the URL

  useEffect(() => {
    fetch(DETAILS_URL(movieId))
      .then(res => res.json())
      .then(data => setDetails(data))
    
  }, [movieId])


  return (
      <div className='details'>
        <img className="movie-img" src={`https://image.tmdb.org/t/p/w342${details.poster_path}`} />
        <div className='details-info'>
          <div className='details-title-votes'>
            <h2>{details.title}</h2>
          </div>
        </div>
      </div>
  )
}

export default Details;