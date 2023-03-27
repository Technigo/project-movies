import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from 'components/Header'
import { StartPage } from 'components/StartPage'
import { TVseries } from 'components/TVseries'

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Header />
        <Routes />
        <Route path="/" element={<StartPage />} />
        <Route path="/TV-series" element={<TVseries />} />
        <Routes />
      </main>
    </BrowserRouter>
  );
}
