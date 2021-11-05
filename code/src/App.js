import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Movies from './components/Movies'
import Details from './components/Details'
import NotFound from './components/NotFound'
import Loading from 'components/Loading'
import { BASE_URL } from './utils/urls'

export const App = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(BASE_URL)
    .then((res) => res.json())
    .then((data) => setMovies(data.results))
    .finally(() => setTimeout(() => setLoading(false), 1000)
  )}, [])

  return (
    <BrowserRouter>
      <Switch>
        {loading && <Loading />}
        <Route exact path='/' render={()  =>  <Movies movies={movies} loading={loading}/>}/>
        <Route path='/details/:movie_id' component={Details}/>
        <Route path='/404' component={NotFound}/>
        <Redirect to="/404"/>
      </Switch>
    </BrowserRouter>
  )
}
