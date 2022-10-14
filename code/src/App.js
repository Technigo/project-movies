import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
/* import Header from 'components/Header'; */
import PopularList from 'components/PopularList';
import Details from 'components/Details';
import NotFound from 'components/NotFound';

export const App = () => {
  const [popularList, setPopularList] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(loading)

  useEffect(() => {
    setLoading(true);
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=22332a0afa34a5b14d4e80b45a24b1e8&language=en-US&page=1')
      .then((res) => res.json())
      .then((data) => {
        setPopularList(data.results)
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
      <p>Loading...</p>
    );
  }
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<PopularList movies={popularList} />} />
        <Route path="/movies/:id" element={<Details />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
