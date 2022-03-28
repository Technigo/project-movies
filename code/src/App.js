import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Popular from 'components/Popular'
import Details from 'components/Details'
import { MOVIES_URL } from 'utils/urls'

export const App = () => {

  const [list, setList] = useState([])

  useEffect(()=> {
    fetch(MOVIES_URL)
    .then(res => res.json())
    .then(data => { 
      setList(data.results)
    })
  }, [])

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Popular movies={list} />} />
    <Route path="/movies/:id" element={<Details />}/>
    </Routes>
    </BrowserRouter>
  )
}

//adding a comment 