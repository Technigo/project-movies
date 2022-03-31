import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom' 
import MovieList from 'components/MovieList'
import MovieDetail from 'components/MovieDetail'
import { API_URL } from "ultils/API_URLS";
import Loading from 'components/Loading'
import NotFound from 'components/NotFound';


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
      {loading && <Loading />}
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
