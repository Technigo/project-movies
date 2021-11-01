import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails'
import { API_URL } from './utils/urls'

export const App = () => {
  const [list, setList] = useState([])

  useEffect (() => {
    fetch(API_URL)
      .then((res) => res.json ())
      .then((data) => setList(data.results))
  }, [])
  
  console.log(list)

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => <MovieList movie={list} />} />
          
        
        <Route path="/details">
          <MovieDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
