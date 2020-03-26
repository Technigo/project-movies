import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { PopularList } from './PopularList'
import './app.css'
import { FilmDetails } from 'FilmDetails'

export const App = () => {
  const [films, setFilms] = useState([])
  return (
    <BrowserRouter>
      <main className="flex-container">

        <Switch>
          <Route path="/" exact>
            <PopularList films={films} setFilms={setFilms} />
          </Route>
          <Route path="/films/:title" exact>
            <FilmDetails films={films} />
          </Route>
        </Switch>

      </main>
    </BrowserRouter>
  )
}
