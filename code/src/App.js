import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'

import { MOVIE_LIST_URL } from './utils/url'
import PopularMoviesList from './components/PopularMoviesList'
import Details from './components/Details'
import Error from 'components/Error.jsx'
import LoadingPage from 'components/LoadingPage'



const StyledButton = styled.button`
  border-radius: 2rem;
  background: red;

`

export const App = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=> {
    setIsLoading(true)
    fetch(MOVIE_LIST_URL)
    .then(res => res.json())
    .then(data => {
      setList(data.results);
      setIsLoading(false)
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path = "/" 
          element={
            <>
            {isLoading && <LoadingPage />}
            {!isLoading && <PopularMoviesList movies={list}/>}
            </>
          }
          />
        <Route 
          path ='/details/:movie_id' 
          element={
            <>
            {isLoading && <LoadingPage />}
            {!isLoading && <Details movies={list} StyledButton={StyledButton} />}
            </>
          }/>
        <Route path ="*" element={<Error />}/>
      </Routes>
    </BrowserRouter>
  )
}
