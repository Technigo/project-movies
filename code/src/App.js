import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import { Nav } from 'componet/Nav'
import { MovieList } from 'componet/MovieList'
import { MovieDetail } from 'pages/MovieDetail'
import { NotFound404 } from 'componet/NotFound404'

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [list, setList] = useState('popular');

  const API_KEY = '7a8b8f73f0f19bc86674c69db87cbbc7'
  const MOVIE_URL = `https://api.themoviedb.org/3/movie/${list}?api_key=${API_KEY}&language=en-US&page=1`;

  const fetchMovies = () => {
    fetch(MOVIE_URL)
        .then(res => res.json())
        .then(data => setMovies(data.results))
        .catch(error => console.error(error));
  }

  // Fetches Movies and fetches it again when list is updated.
  useEffect(fetchMovies, [list]);

  //Handle 
  const handleListChange = (list) => {
    setList(list);
  }

  return (
    <BrowserRouter>
      <main>
        <Switch>

          {/* Show movielist */}
          <Route path="/" exact>
            <Redirect to="/popular"/>
          </Route>
          <Route path="/popular" exact>
            <Nav onListChange={handleListChange}/> 
            <MovieList movieArray={movies}/>
          </Route>
          <Route path="/upcoming" exact>
            <Nav onListChange={handleListChange}/> 
            <MovieList movieArray={movies}/>
          </Route>
          <Route path="/now-playing" exact>
            <Nav onListChange={handleListChange}/> 
            <MovieList movieArray={movies}/>
          </Route>

          {/* Show details componet */}
          <Route path="/movies/:id" exact>
            <MovieDetail />
          </Route>

          {/* Not Found path */}
          <Route path="/404">
            <NotFound404 />
          </Route>

          {/* When no url is correct, it redirects to 404 page */}
          <Redirect to="/404"/>
        </Switch>
      </main>
    </BrowserRouter>
  )
}
