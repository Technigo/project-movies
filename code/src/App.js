import React from 'react'
import { LIST_URL } from 'utils/urls'
// import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MovieList from './components/MovieList'
import { useEffect, useState } from 'react'

export const App = () => {
  const [movieTitle, setMovieTitle] = useState([])

  useEffect(() => {
    fetch(LIST_URL)
      .then((res) => res.json())
      .then((data) => setMovieTitle(data.results))
  }, [])

  return (
    <div>
      {movieTitle.map((title) => (
        <MovieList
          key={title.id}
          title={title.original_title} />
      ))}
    </div>
  )
}
