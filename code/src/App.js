import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import { PopularList } from 'components/PopularList'
import { Detail } from 'components/Detail'
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
    </Switch>
    </BrowserRouter>
   
  )
}
