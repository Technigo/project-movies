import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from 'components/Header'
import { OnCinema } from 'components/OnCinema'

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Header />
        <Routes>
          <Route path="/onCinema" element={<OnCinema />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
