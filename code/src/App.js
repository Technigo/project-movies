import React from 'react'
import { MoviesList } from './Pages/MoviesList'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

export const App = () => {
  return (
    <div>
    
    <BrowserRouter>

    <main>

      <Switch>
      <Route path="/" exact>
        
      <MoviesList />

      </Route>
      </Switch>

    </main>

    </BrowserRouter>

    </div>
  )
}
