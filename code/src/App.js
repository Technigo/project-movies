import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import PopularList from 'components/PopularList'
import Details from 'components/Details'
import NotFound from 'components/NotFound'
import { ALL_MOVIES_URL } from "./utils/urls"

import GlobalStyles from "components/styles/Global";

const App = () => {

  const [allMovies, setAllMovies] = useState([])

  useEffect(() => {
    fetch(ALL_MOVIES_URL)
      .then(res => res.json())
      .then(res => {
        setAllMovies(res.results)
      })
  }, [])

  return (
    <section>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PopularList allMovies={allMovies} setAllMovies={setAllMovies}/>} />
          <Route path="/movie/:movieId" element={<Details />} />
          <Route path="/404" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </section>
  )
}

export default App
