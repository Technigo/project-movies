import React, { useState, useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Movies from "Components/Movies"
import Details from "Components/Details"
import API_URL from "utils/URLS"

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
        <Route path="/Details" element={<Details details={list} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Main

