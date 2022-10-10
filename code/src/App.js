import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from 'components/Header'
import { StartPage } from 'components/StartPage'
import { NewReleases } from 'components/NewReleases'

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Header />
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/NewReleases' element={<NewReleases />} />
          <Route path='*' element={<p>Theres nothing here!</p>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
