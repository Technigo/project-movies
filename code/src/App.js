import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieFeed from 'Pages/MovieFeed';
import SingleMovie from 'Pages/SingleMovie';

export const App = () => {
  const [posters, setPosters] = useState([]);
  console.log(posters);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=4f32d41e25209822b9c7a73559fb2822&language=en-US&page=1'
    )
      .then((res) => res.json())
      .then((json) => {
        setPosters(json.results);
      });
  }, []);

  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<MovieFeed posters={posters} />} />
          <Route
            path="/posters/:id"
            element={<SingleMovie posters={posters} />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
