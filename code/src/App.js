import React, {useState, useEffect}from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PopularList from 'pages/PopularList'
import Detail from 'pages/Detail'

import { API_LIST } from 'utils/urls'



export const App = () => {
  
  const[list, setList] = useState([]);
  
  useEffect(()=> {
    fetch(API_LIST)
    .then(res => res.json())
    .then(data => {
     setList(data.results); 
    });
  },[]);
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<PopularList movielist={list} />} />
        <Route path="/details/:movieId" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}
