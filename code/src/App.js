import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MovieList from './components/MovieList/MovieList';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Loading from '../src/components/Loading/Loading';
import { MOVIES_URL } from './utils/urls';

export const App = () => {
  const [movieLi, setMovieLi] = useState([]);
  const [loading, setLoading] = useState(false);
  /*  const [movieId, setMovieId] = useState({}); */

  useEffect(() => {
    setLoading(true);
    fetch(MOVIES_URL)
      .then((res) => res.json())
      .then((data) => setMovieLi(data.results))
      .finally(() => setLoading(false));
  }, []);

  console.log('GENERAL DATA', movieLi);

  return (
    <>
      <BrowserRouter>
        {loading && <Loading />}
        <Switch>
          <Route
            exact
            path='/'
            render={() => <MovieList movies={movieLi} />}
          ></Route>

          <Route path='/movies/:movieId' component={MovieDetails}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
