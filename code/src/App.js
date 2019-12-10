import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Movies } from 'components/Movies'

// const APIKEY = {057cd4e552ae112195cad4ea9c32ccdb}

export const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Movies />
      </Route>
     
    </Switch>
    </BrowserRouter>
  )
}
