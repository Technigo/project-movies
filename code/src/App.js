import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Movielist} from './Movielist'
import {Moviedetails} from './Moviedetails'

//API key= 9c9b2fee306d943c3bd7e47689474308
//example API:https://api.themoviedb.org/3/movie/550?api_key=9c9b2fee306d943c3bd7e47689474308
//Path="/" betyder att när Path är "/"kommer homepage visas
export const App = () => {
  return (
    <BrowserRouter>
    
      
        <Switch>
          <Route path="/" exact>
            <Movielist />
          </Route>
          <Route path="/test">
            <Moviedetails />
          </Route>
          <Route path="/movies/:movieId" exact>
            <Moviedetails />
          </Route>
        </Switch>
      
    </BrowserRouter>
  )
}
