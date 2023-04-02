import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { MovieDetails } from 'components/MovieDetails';
import { Header } from 'components/Header';
import { MovieList } from 'components/MovieList';
import { NotFound } from 'components/NotFound';
import { GenreList } from 'components/GenreList';
import { GenreMovieList } from 'components/GenreMovieList'
import { GenreMovieDetails } from 'components/GenreMovieDetails';
import { Loader } from 'components/Loader';
import { Home } from 'components/Home'
import { BASE_URL } from 'utils/urls';

export const App = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`${BASE_URL}`)
      .then((res) => res.json())
      .then((data) => {
        setList(data.results)
      })
      .catch((e) => {
        console.error(console.error(e))
      })
      .finally(() => {
        setTimeout(() => setLoading(false), 1500)
      })
  }, [])
  if (loading) {
    return (
      <Loader />
    )
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home HomeArray={list} />} />
        <Route path="/popular" element={<MovieList movies={list} />} />
        <Route path="/popular/:movieId" element={<MovieDetails />} />
        <Route path="/genre-list" element={<GenreList popularMovielist={list} />} />
        <Route path="/genre-list/:genreId" element={<GenreMovieList />} />
        <Route path="/genre-list/:genreId/:genreMovieId" element={<GenreMovieDetails />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
