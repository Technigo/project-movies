import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import List from './components/List';
import Details from './components/Details';

import { MOVIES_URL, CONFIG_URL } from './utils/urls';

export const App = () => {
	const [list, setList] = useState([]);

useEffect(() => {
  fetch(MOVIES_URL)
    .then((res) => res.json())
    .then((data) => setList(data.results));
}, []);


return (
  <>
    <BrowserRouter>
      {/* <Header /> */}
      <Switch>
        {/* // v1 */}
        <Route exact path="/" render={() => <List movies={list} />} />
        <Route path="/details/:movieID" component={Details} />

        {/* // v2
      <Route path="/details">
        <Details />
      </Route> */}
      </Switch>
    </BrowserRouter>
  </>
);
};