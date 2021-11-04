import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import List from './pages/List'
import Images from './pages/Images'

export const App = () => {
  return (
    <div>
      <List />
      <BrowserRouter>
      <Routes>
        <Route path="/" exact>
        <List />
        </Route>
        <Route path="/movies/:id" exact>

        <Images />
      </Route>
      </Routes>
      </BrowserRouter> 
    </div>
  )
}
