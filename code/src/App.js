import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// import Header from 'components/Header';//
import Library from 'components/Library';
import Details from 'components/Details';
import NotFound from 'components/NotFound';

export const App = () => {
  const [library, setLibrary] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=fb030ab3fe4dfd1006bfff2534c26631&language=en-US&page=1')
      .then((res) => res.json())
      .then((data) => {
        setLibrary(data.results)
      })
      .catch((e) => {
        console.error(console.error(e))
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);

  if (loading) {
    return (
      <p>Page is loading...</p>
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Library library={library} />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

// <Header />