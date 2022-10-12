/* eslint-disable linebreak-style */
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from 'components/Header'
import { StartPage } from 'components/StartPage'
import { MovieDetails } from 'components/MovieDetails'
import { NewReleases } from 'components/NewReleases'
import { TVseries } from 'components/TVseries'
import { Upcoming } from 'components/Upcoming'
import { Collection } from 'components/Collection'
import { TvShowDetails } from 'components/TvshowDetails'
import { ReleasesDetails } from 'components/ReleasesDetails'
import { UpcomingDetails } from 'components/UpcomingDetails'

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Header />
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/movies/:id' element={<MovieDetails />} />
          <Route path='/upcoming' element={<Upcoming />} />
          <Route path='/upcoming:id' element={<UpcomingDetails />} />
          <Route path='/collection/:id' element={<Collection />} />
          <Route path='/newReleases' element={<NewReleases />} />
          <Route path='/newReleases/:id' element={<ReleasesDetails />} />
          <Route path='/TV-series' element={<TVseries />} />
          <Route path='/TV-series/:id' element={<TvShowDetails />} />
          <Route path='*' element={<p>Theres nothing here!</p>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
