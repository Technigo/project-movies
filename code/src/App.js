import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Header } from 'components/Header';
import { FilmList } from 'pages/FilmList';
import { FilmDetail } from 'pages/FilmDetail';
import { NotFound } from 'pages/NotFound';


export const App = () => {

  return (
    <>
    <BrowserRouter>
      <Header /> 
      <main>       
        <Switch>            
          <Route path="/" exact>
            <FilmList />          
          </Route>
          <Route path="/films/:filmid">
            <FilmDetail />          
          </Route>
          <Route path="/404">
            <NotFound />          
          </Route>
          <Redirect to="/404"
          />
        </Switch>      
      </main>
    </BrowserRouter>
    </>
  );
};

/*NotFound is a new page that the user get's redirected to if they enter a non exact url. The <redirect/> makes the redirect happen to the NotFound component/page. React will compare which paths have been specified so you don't need to write the from="/path name" attribute for the redirect */