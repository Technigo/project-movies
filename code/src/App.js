import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home } from  './components/Home'



export const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact>
        <Home />
      </Route>






    </BrowserRouter>
  )
}
