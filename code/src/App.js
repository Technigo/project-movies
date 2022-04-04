import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

//API URLS 
import { ALL_MOVIES_URL } from "./utils/urls"

//Styled components
import GlobalStyles from "components/styles/Global";
import AllMovies from 'components/AllMovies'
import MovieDetails from 'components/MovieDetails'

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
          <Route path="/" element={<AllMovies allMovies={allMovies} />} />
          <Route path="/movie/:movieId" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </section>
  )
}

export default App
