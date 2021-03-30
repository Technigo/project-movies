import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Detail from './pages/Detail'

import MovieList from './components/MovieList'

export const App = () => {
  return (
    <Router>
      <main>
        <Switch>
          <Route path='/' exact>
            <MovieList />
          </Route>
          <Route path='/movie/:id' exact>
            <Detail />
          </Route>
        </Switch>
      </main>
    </Router>

  )
}
