import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { MAIN_URL } from './utils/urls'
import { MovieList } from 'Components/MovieList'
import { MovieDetails } from 'Components/MovieDetails'
import { LoadingItem } from 'Components/LoadingItem'
import { NotFound } from 'Components/NotFound'

export const App = () => {

  const [movieList, setMovieList] = useState([])
  const [loading, setLoading] = useState(false)

  

  useEffect(() => {
    setLoading(true)
    fetch(MAIN_URL).then(res => res.json()).then(data => setMovieList(data.results))
    .finally( () => setLoading(false))
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path='/' 
          element={ 
            <>
              {loading && <LoadingItem />}
              {!loading && 
                  <MovieList 
                  movieList={movieList} 
                  />}
            </>
        } 
        />
        
        <Route 
          path='/details/:movieId' 
          element={
            <MovieDetails movieList={movieList} 
            />
        }
        />
        <Route path='/404' element={<NotFound/>}/>
        <Route path='*' element={<Navigate to="/404" replace/>} />
      </Routes>
    </BrowserRouter>
  )
}


