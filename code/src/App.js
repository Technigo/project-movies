import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import { MovieList } from './pages/MovieList'

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <MovieList />
          </Route>
        </Switch>
      </BrowserRouter>
      {/* Hey You - Find me in src/app.js! */}
    </div>
  )
}
