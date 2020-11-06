import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { TVShowDetails } from './pages/TVShowDetails';
import { TVShowList } from './components/TVShowList';

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <TVShowList />
          </Route>
          <Route path="/tv/:id" exact>
            <TVShowDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
