/* eslint-disable linebreak-style */
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Header } from 'components/Header'
import { StartPage } from 'pages/StartPage'
import { MovieDetails } from 'pages/MovieDetails'
import { Oncinema } from 'pages/Oncinema'
import { TVseries } from 'pages/TVseries'
import { Upcoming } from 'pages/Upcoming'
import { Collection } from 'pages/Collection'
import { TvSeriesDetails } from 'pages/TvseriesDetails'
import { NotFound } from 'components/NotFound'
import { Seasons } from 'pages/Seasons'

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Header />
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/movies/:id' element={<MovieDetails />} />
          <Route path='/upcoming' element={<Upcoming />} />
          <Route path='/collection/:id' element={<Collection />} />
          <Route path='/newReleases' element={<Oncinema />} />
          <Route path='/TV-series' element={<TVseries />} />
          <Route path='/TV-series/:id' element={<TvSeriesDetails />} />
          <Route path='/seasons/:id' element={<Seasons />} />
          <Route path='/404' element={<NotFound />} />
          <Route path='*' element={<Navigate to='/404' replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
