import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { PopularMovieList } from 'componet/PopularMovieList'
import { Nav } from 'componet/Nav'
import { MovieDetail } from 'pages/MovieDetail'

export const App = () => {
  const API_KEY = '7a8b8f73f0f19bc86674c69db87cbbc7'
  const POPULAR_MOVIE_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    fetch(POPULAR_MOVIE_URL)
        .then(res => res.json())
        .then(data => setMovies(data.results))
        .catch(error => console.error(error));
  }


  return (
    <BrowserRouter>
      <main>
        
        {/* <Nav /> */}
        <Switch>
          <Route path="/" exact>
            <PopularMovieList movieArray={movies}/>
          </Route>
          <Route path="/movies/:id" exact>
            <MovieDetail />
          </Route>
        </Switch>
        
      </main>
    </BrowserRouter>
  )
}
