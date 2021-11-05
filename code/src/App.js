import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Detail from './pages/Detail'
import List from './pages/List'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<List/>}>
      </Route>
      <Route exact path="/movies/:id" element={<Detail/>}>
      </Route>
      </Routes>
    </BrowserRouter>
  )
}
