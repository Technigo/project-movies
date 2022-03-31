import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom' 
import MovieList from 'components/MovieList'
import MovieDetail from 'components/MovieDetail'
import { API_URL } from "ultils/API_URLS";
import styled from 'styled-components';
import NotFound from 'components/NotFound';

const LoadingDiv = styled.div`

  background-color: black;
  width: 100vw;
  height: 100vh;
`

const LoadingText = styled.p`
  font-size: 3rem;
  color: white;
  text-align: center;
  padding-top: 10rem;
`
export const App = () => {
  

  const [movieList,setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true)
    fetch(API_URL)
    .then(res => res.json())
    .then(data => setMovieList(data.results))
    .finally(()=> setLoading(false))
  },[])
 

  return (

     <>
     {loading && <LoadingDiv>
      <LoadingText>Loading...</LoadingText>
      </LoadingDiv> }

      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <MovieList movieList={movieList} setMovieList={setMovieList}/>} />
          <Route path='details/:movieId' element={ <MovieDetail  movieList= {movieList}/>} />
          <Route path='*' element={ <NotFound />} />
        </Routes>
      </BrowserRouter>
      </>
    
  )
}
