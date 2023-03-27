
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieList from 'components/MovieList';
import SingleMovieDetails from 'components/SingleMovieDetails';

export const App = () => {
  const [movieList, setMovieList] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchMovies = () => {
    setLoading(true);
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=b3a14eb323759b106d94ec4c766dcb5e&language=en-US&page=1')
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data.results)
        console.log(movieList)
      })
      .catch((e) => {
        console.error(console.error(e))
      })
      .finally(() => {
        setLoading(false);
      })
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  if (loading) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieList movieList={movieList} />} />
          {/* <Route path="*" element={<Navigate to="/404" replace />} /> */}
          {/* <Route path="/" element={<MovieList movieList={movieList} />} /> */}
          <Route path="/movie/:movieID" element={<SingleMovieDetails />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
