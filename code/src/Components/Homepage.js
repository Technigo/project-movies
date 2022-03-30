import React, { useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BASE_URL } from 'utils/urls';

import MovieList from 'Components/MovieList';
import MovieDetails from 'Components/MovieDetails';
// import Header from './Header';

const Homepage = () => {

  const [movies, setMovies] = useState([]);

  useEffect(()=> {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
      setMovies(data.results);
    });
  }, []);

  return (
    <BrowserRouter>
      {/* <Header/> */}
      {/* <main> */}
        <Routes>
          <Route path="/" element={<MovieList movies={movies}/>} />
          <Route path="/details/:movieTitle" element={<MovieDetails />} />
        </Routes>
      {/* </main> */}
    </BrowserRouter>
  )
}

export default Homepage;