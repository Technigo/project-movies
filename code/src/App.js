import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import List from 'components/List'
import Details from 'components/Details'
import { BASE_URL } from 'utils/urls'
import Header from 'components/Header'

export const App = () => {

  const [list, setList] = useState([])

  useEffect(()=> {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => { 
      setList(data.results)
    })
  }, [])

  return (
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element={<List pokemons={list}/>} />
    <Route path="/details/:pokemonName" element={<Details />}/>
    </Routes>
    </BrowserRouter>
  )
}
