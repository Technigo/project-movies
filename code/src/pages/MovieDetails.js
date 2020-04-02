import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { HomeLink } from '../components/HomeLink'
import './moviedetails.css'


export const MovieDetails = () => {
  const api_key = 'a73940630fef7bbf6627fbbc1d85c9ee'
  const { movieId } = useParams()
  const [details, setDetails] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        setDetails(json)
        setLoading(false)
      })
  }, [movieId])

  if (loading) {
    return <h1>Page is loading..</h1>
  }

  if (!details.id) {
    return (
      <div className='not-found'>
        <h1>Movie not found...</h1>
        <Link to='/' className='back-link'>
          <HomeLink /> Back to start
        </Link>
      </div>)
  }

  return (
    < div className='detail-page'>
    <Link to='/' className='back-link'>
        <HomeLink /> Movies
      </Link>
      <div className='detail-page'>
        <div className='background' style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${details.backdrop_path})` }}>
          <div className='summary'>
            <img src={`https://image.tmdb.org/t/p/w342${details.poster_path}`} alt={details.original_title} />
            <div className='text'>
              <h3>{details.original_title} <span>{details.vote_average}/10</span></h3>
              <div className='producer'>
                {details.production_companies.map((producer) => (
                  <p key={producer.name}>{producer.name}</p>
                ))}
              </div>
              <p>{details.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}