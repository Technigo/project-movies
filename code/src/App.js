import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nav } from './Nav';
import { Welcome } from './Welcome';
import { Contact } from './Contact';
import { About } from './About';

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Nav />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
