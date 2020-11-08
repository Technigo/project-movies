import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { DetailPage } from './pages/DetailPage';
import { ListPage } from './pages/ListPage';

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar--container">
          <p className="navbar_info">Popular tv-shows 
            <span 
              role="img" 
              aria-label="popcorn-emoji" 
              className="emoji"
            > 🍿
            </span>
          </p>
        </nav>
        <Switch>
          <Route exact path="/" >
            <ListPage />
          </Route>
          <Route exact path="/tv/:id" >
            <DetailPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
