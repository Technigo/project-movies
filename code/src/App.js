import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { MOVIELIST } from 'Urls.js/url'
import Popular from 'components/Popular'
import Details from 'components/Details'

export const App = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    fetch(MOVIELIST)
      .then((res) => res.json())
      .then((data) => {
        setList(data.results)
      })
  }, [])

  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Popular list={list}/>} />
          <Route path="/details/:movie_id" element={<Details />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
