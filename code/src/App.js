import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Popular } from 'pages/Popular'
import { Detail } from 'pages/Detail'

export const App = () => (
  <Router>
    <Route path="/" exact>
      <Popular />
    </Route>
    <Route path="/movies/:id">
      <Detail />
    </Route>
  </Router>
)