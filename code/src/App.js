import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Popular from 'components/Popular'
import Details from 'components/Details'
import Footer from 'components/Footer'


export const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Popular />} />
        <Route path="/movies/:movieId" element={<Details />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
