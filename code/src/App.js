/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import MovieList from 'components/MovieList';
import SingleMovieDetails from 'components/SingleMovieDetails';
import NotFound from 'components/NotFound';
import Loading from 'components/Loading';
import { API_KEY } from 'utils/urls';

export const App = () => {
  const [movieList, setMovieList] = useState([])
  const [loading, setLoading] = useState(false)
  const [pageNumber, setPageNumber] = useState(1)
  const [genreList, setGenreList] = useState([])
  const [selectedGenre, setSelectedGenre] = useState('')

  const fetchGenre = () => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setGenreList(data.genres)
      })
      .catch((e) => {
        console.error(console.error(e))
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    console.log(API_KEY);
    fetchGenre()
  }, [])
  const fetchMovies = () => {
    setLoading(true)
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${selectedGenre}&language=en-US&page=${pageNumber}`)
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data.results)
      })
      .catch((e) => {
        console.error(console.error(e))
      })
      .finally(() => {
        setTimeout(() => setLoading(false), 500)
      })
  }

  useEffect(() => {
    fetchMovies()
  }, [pageNumber, selectedGenre])

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<MovieList
              movieList={movieList}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              genreList={genreList}
              setLoading={setLoading}
              setSelectedGenre={setSelectedGenre}
              selectedGenre={selectedGenre} />} />
          <Route path="/movie/:movieID" element={<SingleMovieDetails />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
