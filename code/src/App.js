import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import PopularList from 'components/PopularList'
import Details from 'components/Details'
import { DETAILS_URL, ALL_MOVIES_URL } from "./utils/urls"

const App = () => {

  const [allMovies, setAllMovies] = useState([])

  useEffect(() => {
    fetch(ALL_MOVIES_URL)
      .then(res => res.json())
      .then(res => {
        setAllMovies(res.results)
        console.log('[App.js]', res.results)
      })
  }, [])

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
