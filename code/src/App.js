import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Header } from 'components/Header'
import { StartPage } from 'components/StartPage'

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<StartPage />} />
          <div>
      Find me in src/app.js!
          </div>
        </Routes>
      </main>
    </BrowserRouter>
  );
}
