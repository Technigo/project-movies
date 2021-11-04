import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TOP_URL_LIST } from 'utils/urls'
import { LoadingSpinner } from './LoadingSpinner'
import { Header } from './Header'

import '../css/overview.css'

export const TopRatedOverview = () => {
  const [topOverview, setTopOverview] = useState([])
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    fetchTopMovies()
  }, [])

  const fetchTopMovies = () => {
    setLoader(true)
    fetch(TOP_URL_LIST)
      .then((response) => response.json())
      .then((data) => setTopOverview(data.results))
      .finally(() => setLoader(false))
  }

  return (
    <>
      <Header />
      <div className='movie-grid'>
        {loader && <LoadingSpinner />}
        {topOverview &&
          topOverview.map((movie) => (
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
