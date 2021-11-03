import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Header from './components/Header'
import List from './components/List'
import Details from './components/Details'
import NotFound from './components/NotFound'
import { BASE_URL } from './utils/urls'

export const App = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    fetch(BASE_URL)
    .then((res) =>res.json())
    .then((data) => setList(data.results))
  }, [])

  return (
    <BrowserRouter>
      <Header />
      {/* switch is responsible for telling that it should only pick one patch */}
      <Switch>
        <Route exact path='/' render={()  => <List pokemons={list} />}/>
        <Route path='/details/:pokemonName' component={Details}/>
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
