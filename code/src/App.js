/* eslint-disable linebreak-style */
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Header } from 'components/Header'
import { StartPage } from 'components/StartPage'
import { MovieDetails } from 'components/MovieDetails'
import { NewReleases } from 'components/NewReleases'
import { TVseries } from 'components/TVseries'
import { Upcoming } from 'components/Upcoming'
import { Collection } from 'components/Collection'
import { TvShowDetails } from 'components/TvshowDetails'
import { NotFound } from 'components/NotFound'

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
          <Route path='/newReleases' element={<NewReleases />} />
          <Route path='/TV-series' element={<TVseries />} />
          <Route path='/TV-series/:id' element={<TvShowDetails />} />
          <Route path='/404' element={<NotFound />} />
          <Route path='*' element={<Navigate to='/404' replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
