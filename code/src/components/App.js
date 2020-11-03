import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { MOVIELIST__URL } from './URLS.js';
import { Nav } from './Nav.js';
import { MovieList } from './MovieList';
import { Movie } from './Movie';

import '../styles/app.css';

export const App = () => {
  const [movies, setMovies] = useState([]);

  const getMovieList = () => {
    fetch(MOVIELIST__URL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.results)
      setMovies(data.results)
    })
  };

useEffect(()=>{
  getMovieList()
},[]);

  return (
/* To include: combining useEffect and useState with using API's in react
To use placeholders in urls to pick dynamic parts from urls
To use React Router to create multi-page applications */

    //The BrowserRouter enables the usage of routes and links
    //The whole application should be wrapped in Browserrouter

    //The Route component enables one to choose which component should
    //be rendered when the url is at a specific path.

    //The Switch makes sure that only one Route is rendered at a time
    //When the first Route that it comes across matches, it will stop looking for other URLs.
    <BrowserRouter>
      <main className='app__grid'>
        <Nav />

        <Switch>
          <Route path='/' exact>
              <MovieList 
              movies={movies}/>
          </Route>
          <Route path='/movie' exact>
            <Movie />
          </Route>
          <Route path='/short' exact>
            <Movie />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>

  );
};
