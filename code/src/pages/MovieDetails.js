import React, { useEffect, useState } from 'react'
import './MovieDetails.css'
import { useParams } from 'react-router-dom'

export const MovieDetails = () => {

  const { id } = useParams()

  const DETAILS_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=e2eb26a39cdd68b3570a5c1b62c9c638&language=en-US`
  const [details, setDetails] = useState([])

  useEffect (() => {
    fetch(DETAILS_URL)
      .then((response) => response.json())
      .then((json) => setDetails(json))
  }, [])

  console.log(details) // - don't forget to remove

  return (
    <section className='movie-details'>
      
      //<img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} alt={details.title}/>
      //<h2>{details.title}</h2>
      //<p>{details.vote_average}</p>
      //<p>{details.overview}</p>
    </section>
  )
}