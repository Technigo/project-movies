import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { MovieDetails } from 'components/MovieDetails';
import { Header } from 'components/Header';
import { MovieList } from 'components/MovieList';
import { NotFound } from 'components/NotFound';

export const App = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=c4d0ef560a112a28bb0aa7ff2aa79464&language=en-US&page=1')
      .then((res) => res.json())
      .then((data) => {
        setList(data.results)
      })
      .catch((e) => {
        console.error(console.error(e))
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])
  if (loading) {
    return (
      <p>Loading...</p>
    )
  }
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MovieList movies={list} />} />
        <Route path="/details/:movieId" element={<MovieDetails movie={list} />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
