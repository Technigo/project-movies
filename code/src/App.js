import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PopularList } from './Pages/PopularList'
import { Detail } from './Pages/Detail'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PopularList />} />
        <Route path="/movies/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}
