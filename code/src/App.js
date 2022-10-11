/* eslint-disable operator-linebreak */
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Details from 'components/Details';
import NotFound from 'components/NotFound';
import Header from 'components/Header';
import { List } from 'components/List';

// const API_URL =
//   'https://api.themoviedb.org/3/movie/550?api_key=d4669261ce30d2ac76f238d73f4bd890';

export const App = () => {
  // const [pokemonList, setPokemonList] = useState([]);

  // useEffect(() => {
  //   fetch('https://pokeapi.co/api/v2/pokemon')
  //     .then((response) => response.json())
  //     .then((data) => setPokemonList(data.results));
  // }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/details/:movieName" element={<Details />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
};
