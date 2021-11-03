import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Header from './components/Header'
import Movies from './components/Movies'
import Details from './components/Details'
import NotFound from './components/NotFound'
import { BASE_URL } from './utils/urls'

export const App = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(BASE_URL)
    .then((res) =>res.json())
    .then((data) => setMovies(data.results))
  }, [])

  return (
    <BrowserRouter>
      <Header />
      {/* switch is responsible for telling that it should only pick one patch */}
      <Switch>
        <Route exact path='/' render={()  => <Movies movies={movies} />}/>
        <Route path='/details/:movie_id' component={Details}/>
        <Route path='/404' component={NotFound}/>
        <Redirect to="/404"/>
        
        {/* // v2
        <Route path='/details'>
          <Details />
        </Route> */}
      </Switch>
    </BrowserRouter>
  )
}
