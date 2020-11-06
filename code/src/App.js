import React from 'react'
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import { PopularList } from 'components/PopularList'
import { Detail } from 'components/Detail'
import { NotFound } from 'components/NotFound'

import './index.css'

export const App = () => {
  return (
    <BrowserRouter>
 
    <Switch>
      <Route path="/" exact>
      <PopularList />
      </Route>
      <Route path="/movies/:movieId" exact>
      <Detail />
      </Route>
      <Route path="/404">
      <NotFound />
      </Route>
      <Redirect 
      to="/404"
      />
    </Switch>
    </BrowserRouter>
   
  )
}
