import React from 'react'
import { MoviesList } from './Pages/MoviesList'
import { DetailsMovies  } from './Pages/DetailsMovies'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

export const App = () => {
  return (
    <div>
    
    <BrowserRouter>

    <main>

      <Switch>
      <Route exact path="/" >
        
      <MoviesList />

      </Route>

      <Route exact path="/movies/:id"> 

      <DetailsMovies /> 
      
      </Route>
      </Switch>

    </main>

    </BrowserRouter>

    </div>
  )
}
