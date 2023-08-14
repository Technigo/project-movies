import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from 'components/Header';
import PopularMovies from 'pages/PopularMovies';
import NotFound from 'pages/NotFound';
import MovieDetails from 'pages/MovieDetails';
import UpcomingMovies from 'pages/UpcomingMovies';
import TVSeries from 'pages/TVSeries';
import TVSeriesDetails from 'pages/TVSeriesDetails';
import './index.css';
import './moviedetails.css';

export const App = () => {
  return (

    <BrowserRouter>
      <Header />
      <div className="outer-wrapper">
        <Routes>
          <Route path="/" element={<PopularMovies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/upcoming" element={<UpcomingMovies />} />
          <Route path="/tv" element={<TVSeries />} />
          <Route path="/tv/:tvSeriesId" element={<TVSeriesDetails />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

// https://api.themoviedb.org/3/movie/popular?api_key=52f9f6dc03440f8be0c16de930243dfe&language=en-US&page=1
