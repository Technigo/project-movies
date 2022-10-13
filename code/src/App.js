import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { MovieList } from './components/MovieList'
import { MovieDetails } from './components/MovieDetails'
import { PageNotFound } from './components/PageNotFound'

// REMEMBER TO IMPORT PAGES

export const App = () => {
  const API_KEY = '79339436b04cca29ee82635056159807'
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((data) => {
        setList(data.results)
      })
      .catch((e) => {
        console.error(console.error(e))
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);
  console.log(list);
  if (loading) {
    console.log('loading...')
    return <p>Loading...</p>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList list={list} />} />
        <Route path="/moviedetails/:id" element={<MovieDetails />} />
        {/*  <Route path="moviedetails/movieId" element={<MovieDetails />} /> */}
        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}