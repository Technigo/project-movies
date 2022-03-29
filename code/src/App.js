import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Details } from 'Pages/Details'
import { Movies } from 'Pages/Movies'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Movies />} />
      </Routes>
    </BrowserRouter>
  )
}

// API key for The Movie Data Base: 3d84d8a2e7d9f4fcf68bb05afb8dd7ef //