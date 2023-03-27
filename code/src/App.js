import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from 'components/Header'
import { StartPage } from 'components/StartPage'
import { TVseries } from 'components/TVseries'

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes />
        <Route path="/" element={<Header />} />
        <Route path="/startpage" element={<StartPage />} />
        <Route path="/tvseries" element={<TVseries />} />
        <Routes />
      </main>
    </BrowserRouter>
  );
}
