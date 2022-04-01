import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import {MovieList} from 'components/MovieList'
import { MovieDetails } from 'components/MovieDetails'
import { NotFound } from 'components/NotFound'

export const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/404" element = {<NotFound/>}/>  
        <Route path="/" element = {<MovieList />}/>
        <Route path="/Details/:id" element = {<MovieDetails/> }/>
        <Route path ='*' element = {<Navigate to="/404"/>}/>
      </Routes>
    </BrowserRouter>
  )
}
