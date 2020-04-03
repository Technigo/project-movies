import React from 'react'
import { NavBar } from 'Header/NavBar'
import { MoviesList } from './Pages/MoviesList'
import { DetailsMovies  } from './Pages/DetailsMovies'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

export const App = () => {
  return (
    <div>
    
    <BrowserRouter>

    <NavBar />
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
