import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Popular } from 'Pages/Popular'
import { Details } from 'Pages/Details'

export const App = () => (
  <Router>
    <Route path ="/" exact>
      <Popular />
    </Route>
    <Route path="/movies/:id">
      <Details />
    </Route>
  </Router>
)