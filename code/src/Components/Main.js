import React, { useState, useEffect } from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"

import Movies from "Components/Movies"
import Details from "Components/Details"
import {API_URL} from "utils/URLS"
import NotFound from "Components/NotFound"

const Main = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setList(data.results)
      })
  }, [])
  console.log(list)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies movies={list} />} />
        <Route path="/Details/:movieId" element={<Details details={list}/>} />
        <Route path="/404" element={<NotFound/>} />
        <Route path='*' element={<Navigate to="/404" replace/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default Main

