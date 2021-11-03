import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PopularList from './components/PopularList';
import Details from './components/Details';
import NotFound from './components/NotFound';

import { MOVIES_URL} from './utils/urls';

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
        <Route exact path="/" render={() => <PopularList movies={list} />} />
        <Route path="/details/:movieID" component={Details} />
        <Route path="/" component={NotFound} />
        
        {/* // v2
      <Route path="/details">
        <Details />
      </Route> */}
      </Switch>
    </BrowserRouter>
  </>
);
};