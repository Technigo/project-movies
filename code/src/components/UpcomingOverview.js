import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UPCOMING_URL_LIST } from 'utils/urls'
import { LoadingSpinner } from './LoadingSpinner'
import { Header } from './Header'

import '../css/overview.css'

export const UpcomingOverview = () => {
  const [upcomingOverview, setUpcomingOverview] = useState([])
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    fetchUpcomingMovies()
  }, [])

  const fetchUpcomingMovies = () => {
    setLoader(true)
    fetch(UPCOMING_URL_LIST)
      .then((response) => response.json())
      .then((data) => setUpcomingOverview(data.results))
      .finally(() => setLoader(false))
  }

  return (
    <>
      <Header />
      <div className='movie-grid'>
        {loader && <LoadingSpinner />}
        {upcomingOverview &&
          upcomingOverview.map((movie) => (
            <Link
              className='movie-container'
              key={movie.id}
              to={`/movies/${movie.id}`}
            >
              <img
                className='movie-poster'
                src={`http://image.tmdb.org/t/p/w342${movie.poster_path}`}
                alt={movie.title}
              ></img>
              <div className='overlay-container'>
                <h1 className='movie-title'>{movie.title}</h1>
                <p className='release-date'>{movie.release_date}</p>
              </div>
            </Link>
          ))}
      </div>
    </>
  )
}
