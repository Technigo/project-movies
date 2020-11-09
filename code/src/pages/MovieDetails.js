import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { MovieDetailed } from '../components/MovieDetailed.js'
import { NotFound } from './NotFound.js'
import { Loader } from '../components/Loader.js'

export const MovieDetails = () => {

  const { movieId } = useParams()
  // "movieId" must be the same variable name as in Route path in App.js, it gets the dynamic variable out of the URL

  const MOVIE_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=c07a4dcb1d91b54eb3b153e458e26489`

  const [movie, setMovie] = useState({})
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(false)


  const getMovie = () => {
    setLoading(true)
    fetch(MOVIE_URL)
      .then(response => {
        setStatus(response.ok) // ok goes for status messages 200-299 (everything went ok), boolean value
        return response.json()
      })
      .then(json => {
        setMovie(json)
        setTimeout(() => {
          setLoading(false)
        }, 1990) // puts the setLoading on hold for 1990 milliseconds
      })
  }

  useEffect(getMovie, [])

  return (
    <>
      {loading ? <Loader /> :
        status ? <MovieDetailed key={movie.id} {...movie} /> :
          !status ? <NotFound /> :
            null
      }
    </>
  )

}

