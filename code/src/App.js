import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NotFound from 'components/NotFound';
import Details from 'components/Details';
import ListMovies from 'components/ListMovies';
import { LIST_URL } from 'utils/urls.js';

export const App = () => {
  const [listMovies, setListMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  // this is borrowed from the example project
  useEffect(() => {
    setLoading(true);
    fetch(LIST_URL)
      .then((response) => response.json())
      .then((data) => {
        setListMovies(data.results)
      })
      .catch((e) => {
        console.error(e)
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);

  if (loading) {
    return (
      <p>Loading...</p>
    );
  }
  console.log(listMovies)

  return (
    // this is the main wrapper for the whole app
    <BrowserRouter>
      <section className="outer-container">
        <div className="inner-container">
          <Routes>
            {/* path to a single component */}
            <Route path="/" element={<ListMovies listMovies={listMovies} />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </div>
        {/* wrapper for every component that need to be linked to */}
      </section>
    </BrowserRouter>
  );
}