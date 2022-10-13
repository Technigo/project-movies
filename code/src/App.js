import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import NotFound from 'components/NotFound'
import Header from 'components/Header'
import MovieDetails from 'components/MovieDetails'
import MovieList from 'components/MovieList'
import { MOVIE_LIST_URL } from 'utils/urls'

// Gör laddningen långsammare så att loadern syns
const delayer = (delayTime) => {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise((resolve) => setTimeout(resolve, delayTime))
}

export const App = () => {
  const [movieList, setMovieList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(MOVIE_LIST_URL)
      .then((response) => response.json())
      .then((data) => setMovieList(data.results))
      .catch((error) => console.error(error))
      .finally(() => {
        delayer(1000).then(() => {
          setLoading(false)
        })
      })
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MovieList movieList={movieList} loading={loading} />} />
        <Route path="/movieDetails/:movieId" element={<MovieDetails loading={loading} />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  )
}
