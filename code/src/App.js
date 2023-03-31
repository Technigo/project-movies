/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Aboutus from 'components/Aboutus';
import Moviedetails from './components/Moviedetails'
import Movies from './components/Movies'
import Notfound from './components/Notfound'
import Loadingscreen from './components/Loadingscreen'
import Header from './components/Header'

const Upcomingmovies = ('https://api.themoviedb.org/3/movie/upcoming?api_key=b6486ef7752f2120246f9cab35f64ece&language=en-US&page=1')

export const App = () => {
  const [movieList, setMovielist] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(Upcomingmovies)
      .then((response) => response.json())
      .then((data) => setMovielist(data.results))
      .catch((e) => { console.error(e) })
      .finally(() => { setLoading(false) })
  }, [])
  console.log(movieList)
  if (loading) {
    return <Loadingscreen />
  }
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Movies movieList={movieList} />} />
        <Route path="/moviedetails/:movieId" element={<Moviedetails />} />
        <Route path="/404" element={<Notfound />} />
        <Route path="/*" element={<Navigate to="/404" replace />} />
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
    </BrowserRouter>
  );
}
