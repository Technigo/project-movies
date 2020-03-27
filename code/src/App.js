import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { PopularList } from './pages/PopularList'
import { TopRated } from './pages/TopRated'
import { MovieDetails } from './pages/MovieDetails'
import { NavBar } from './components/NavBar'

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Switch>
          <Route path="/" exact>
            <PopularList />
          </Route>
          <Route path="/top_rated" exact>
            <TopRated />
          </Route>
          <Route path="/movies/:id" exact>
            <MovieDetails />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
}
