import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'

import { MOVIE_LIST_URL } from 'utils/url'
import PopularMoviesList from 'components/PopularMoviesList'
import Details from 'components/Details'
import Error from 'components/Error.jsx'
import LoadingPage from 'components/LoadingPage'


const StyledButton = styled.button`
  margin-top: 4rem;
  margin-left: 3rem;
  padding: 0.5rem;
  color:white;
  cursor:pointer;
  background: transparent;
  border: none;
  font-size:1rem;
  color: 
  border: 3px solid white;
  border-radius: 2rem;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);

  &:hover{
   border: 2px solid white;
   transform: scale(1.5);
   transition: 0.5s ease; 
  }
`

const Overview = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
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
          path="/"
          element={
            <>
              {isLoading && <LoadingPage />}
              {!isLoading && <PopularMoviesList movies={list} />}
            </>
          }
        />
        <Route
          path='/details/:movie_id'
          element={
            <>
              {isLoading && <LoadingPage />}
              {!isLoading && <Details movies={list} StyledButton={StyledButton} />}
            </>
          } />
        <Route path="*" element={<Error StyledButton={StyledButton} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Overview
