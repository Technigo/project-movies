import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { MovieList } from './pages/MovieList'
import { MovieDetails } from './components/MovieDetails'
import { ProdCompanies } from './pages/ProdCompanies'
import { NotFound } from 'pages/NotFound'

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <MovieList />
        </Route>
        <Route path='/movies/:id'>
          <MovieDetails />
        </Route>
        <Route path='/companies/:id'>
          <ProdCompanies />
        </Route>
        <Route path='/404'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}
