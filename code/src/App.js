import React from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

// https://api.themoviedb.org/3/movie/popular?api_key=7e62f4c867db459871fea2a9a052cb08&language=en-US&page=1

export const App = () => {
  // const [loading, setLoading] = useState(false);
  // const [list, setList] = useState([]);
  // const API_KEY = '7e62f4c867db459871fea2a9a052cb08';
  // console.log(list)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/details/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

/*
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList movies={list} />} />
        <Route path="/details/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
  */