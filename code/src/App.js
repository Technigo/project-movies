import React, { useEffect, useState }  from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {MovieList} from 'components/MovieList'
import { MovieDetails } from 'components/MovieDetails'

export const App = () => {
  const [movies, setMovies] = useState([])
  useEffect (() => {
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=49589a3567a395f78c10dc80e04eaf2d&language=en-US&page=1`)
          .then((res) => res.json())
          .then((json) => {
              setMovies(json.results)
              
          })

  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<MovieList movies={movies}/>}/>
        <Route path="/Details/:id" element = {<MovieDetails/> }/>
      </Routes>
    </BrowserRouter>
  )
}
