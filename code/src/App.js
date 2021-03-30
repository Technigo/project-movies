import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { MovieList } from './components/MovieList'
import { MoviePage } from './components/MoviePage'

export const App = () => {
  return (
    
    
      <BrowserRouter>
        
          <Switch>
            <Route exact path="/">
              <MovieList />
            </Route>
            <Route exact path="/movies/:movieId" >
               <MoviePage />
            </Route>
           </Switch>
        
      </BrowserRouter>
       
    
  )
}

