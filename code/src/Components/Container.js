import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import  { Movies } from './Movies'

const key = 'db7243cd4866f0f7a8a865282262f6fd'

export const Container = () => {
  return (
    <BrowserRouter> 
      <main>
        <Route path="/" element={<Movies />} />               
      </main>

    </BrowserRouter>
  )
}