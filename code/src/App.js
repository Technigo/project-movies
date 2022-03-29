import React, {useState, useEffect} from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import One from "Components/One"
import Details from "Components/Details"
import API_URL from "utils/URLS"
  
export const App = () => {

  const [list, setList] = useState([])

  useEffect (() => {
    fetch(API_URL).then(res => res.json()).then(data => {
      setList(data.results)
      
    })
  }, [])
  console.log(list)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<One movies={list} />}/>
        <Route path="/details" element={<Details />}/>
      </Routes>
    </BrowserRouter>
  )
}