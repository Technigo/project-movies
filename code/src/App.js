import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { MoviePoster } from 'MoviePoster'
import { Moviedetails } from 'MovieDetails'


export const App = () => {
  return (
    <div className="movies">
    
      
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <MoviePoster />
          </Route>
          {/* <Route path={`/${movie.id}`} exact> */}
            <Moviedetails />
          {/* </Route> */}
        </Switch>
      </BrowserRouter>

      
    </div>
  )
}
