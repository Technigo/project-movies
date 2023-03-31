import { Header } from 'components/Header';
import { MovieDetails } from 'components/MovieDetails';
import { MovieList } from 'components/MovieList';
import { Tvseries } from 'components/Tvseries'
import { TvseriesDetails } from 'components/TvseriesDetails';
import { Upcoming } from 'components/Upcoming'
import { NotFound } from 'components/NotFound';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { UpcomingDetails } from 'components/UpcomingDetails';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MovieList movies={MovieList} />} />
        <Route path="/moviedetails/:id" element={<MovieDetails />} />
        <Route path="/tvseries" element={<Tvseries />} />
        <Route path="/tvdetails/:id" element={<TvseriesDetails />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/upcomingdetails/:id" element={<UpcomingDetails />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}
