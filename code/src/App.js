import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Popular from 'components/Popular'
import Details from 'components/Details'

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Popular />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
