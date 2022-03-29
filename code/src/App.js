import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import PopularList from 'components/PopularList'
import Details from 'components/Details'



const App = () => {
  return (
    <section>
      <h1>Popular Movies</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PopularList />} />
          <Route path="/movies/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </section>
  )
}

export default App
