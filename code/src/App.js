import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Movie from './components/Movie'
import Details from './components/Details'


export const App = () => {
  return (
    <div>Hii
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Movie />}></Route>
          <Route path='/movie/:id' element={<Details />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}
