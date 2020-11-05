import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { MovieDetailed } from '../components/MovieDetailed.js'
import { NotFound } from '../components/NotFound.js'
import { Loader } from '../components/Loader.js'

export const MovieDetails = () => {

  const { movieId } = useParams()
  // "movieId" must be the same variable name as in Route path in App.js, it gets the dynamic variable out of the URL

  const MOVIE_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=c07a4dcb1d91b54eb3b153e458e26489`

  const [movie, setMovie] = useState({})
  const [status, setStatus] = useState() // used to decide which component to show

  const getMovie = () => {
    fetch(MOVIE_URL)
      .then(response => {
        console.log(response.status)
        setTimeout(() => {
          (setStatus(response.status))
        }, 1990)
        // puts the setStatus on hold for 1990 milliseconds
        return response.json()
      })
      .then(json => {
        setMovie(json)
      })
  }

  useEffect(getMovie, [])

  return (
    <>
      {status === 200 ? ( // status 200 means we have a match and data is fetched
        <MovieDetailed key={movie.id} {...movie} />
      ) : status === 404 ? ( // status 404 means we do not have a match and data is not fetched
        <NotFound />
      ) : ( // else
            <Loader />
          )
      }
    </>
  )

}

// implement history button

