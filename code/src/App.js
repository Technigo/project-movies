import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import MovieList from 'pages/MovieList'
import MovieDetails from 'pages/MovieDetails'
import { API_LIST } from './utils/urls'

export const App = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    fetch(API_LIST)
      .then((res) => res.json())
      .then((data) => setList(data.results))
  }, [])
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <MovieList list={list} />
        </Route>
        <Route path='/movie/:movieId'>
          <MovieDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  )

  // src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
}
