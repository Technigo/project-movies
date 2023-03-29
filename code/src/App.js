import { Header } from 'components/Header';
import { MovieDetails } from 'components/MovieDetail';
import { MovieList } from 'components/MovieList';
import { NotFound } from 'components/NotFound';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

export const App = () => {
  // const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //   fetch('https://api.themoviedb.org/3/movie/popular?api_key=86e13ee94ff829d42c804ae17826dc54')
  //     .then((response) => response.json())
  //     .then((data) => setMovies(data.results))
  // }, [])
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MovieList movies={MovieList} />} />
        <Route path="/moviedetails/:movieId" element={<MovieDetails />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}
