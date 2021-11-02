import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LeosList from './components/LeosList';
import Details from './components/Details';
import Header from './components/Header';
import { LEO_URL } from './utils/urls';

export const App = () => {
  const [list, setList] = useState([]);

  //make the fetch request here as the component not will be unmounted and we only need to do the fetch one time
  useEffect(() => {
    fetch(LEO_URL)
      .then((res) => res.json())
      .then((data) => setList(data.cast));
  }, []);

  console.log(list);

  //Structure always stays the same
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <LeosList movies={list} />} />
        <Route path="/movies/:id" component={Details} />
      </Switch>
    </BrowserRouter>
  );
};

/* // v1 */

/* <Switch>
<Route exact path="/" render={() => <List pokemons={list} />} />
<Route exact path="/details/:pokemonName" component={Details} />
</Switch> */

/* // v2
<Route path="/details">
  <Details />
</Route> */
