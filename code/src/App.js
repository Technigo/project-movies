import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import { Movies } from 'Movies'
import { ShowMovie } from 'ShowMovie'

export const App = () => {

  


  return (
   
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
            <Movies />
        </Route>
        <Route path="/:id" exact>
          <ShowMovie />
        </Route>
      </Switch>
    </BrowserRouter>
    
  )
}
