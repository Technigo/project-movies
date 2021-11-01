import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MovieList } from './components/MovieList'
import { MovieDetails } from './components/MovieDetails'
import { API_URL } from './utils/url'

export const App = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(res => {
        setMovies(res.results)
        console.log(res.results)
      })
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => <MovieList movies={movies} />} />
        <Route path='/details' render={() => <MovieDetails />} />
      </Switch>
    </BrowserRouter>
  )
}
