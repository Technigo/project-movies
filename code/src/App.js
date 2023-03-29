import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { MovieList } from 'Components/MovieList'
import { NotFound } from 'Components/NotFound'
import { MovieDetails } from 'Components/MovieDetails'
import { Movies } from 'Components/Movies'


export const App = () => {
 return (
  {/* Wrapper for everything / main wrapper for the whole wrap */}
  <BrowserRouter>
  {/* Wrapper for every component */}
  <Routes>
  {/* Path to a single component */}
<Route path="/" element={<MovieList />} />
<Route path="/details/:id" element={<Details />} />
<Route path="/404" element={<Notfound />} />
<Route path="*"element={<Navigate to="404" />} />
    
  </Routes>
   
  </BrowserRouter>
 );
}