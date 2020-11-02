import React from 'react' ;
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { TopMoviesList } from 'pages/TopMoviesList';
import { TopMovieDetails } from 'pages/TopMovieDetails';

//TopMoviesHome is my second main page showing movies by rating.
//Created a new BrowserRouter here to make a map of the pages
//shown in this section.
export const TopMoviesHome = () => {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/top-movies" exact>
            <TopMoviesList />
          </Route>

          <Route path="/top-movies/:topMovieID">
            <TopMovieDetails />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
};

//Kept TopMoviesHome at the same level of App.js because this is a
//second main page showing a different list of movies, this time by
//top rating all time.