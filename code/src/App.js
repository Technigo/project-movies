import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {PopularList} from 'Pages/PopularList'
import {FilmInfo} from 'Pages/FilmInfo'

export const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <PopularList />
      </Route>
      <Route path="/films/:filmId">
        <FilmInfo />
      </Route>
    </Switch>
    </BrowserRouter>
  )
}
