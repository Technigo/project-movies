import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { ApiUrl, PosterImgUrl } from './components/ApiUrls';
import TopNav from './components/TopNav';
import ListedMovie from './components/ListedMovie';
import MoviePage from './pages/MoviePage';
import NotFound from './pages/NotFound';

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [categoryUrl, setCategoryUrl] = useState(ApiUrl);

  const getData = () => {
    fetch(categoryUrl)
      .then((results) => results.json())
      .then((json) => {
        setMovies(json.results);
      });
  };

  useEffect(() => {
    getData();
  }, [categoryUrl]);

  return (
    <Router>
      <TopNav setCategoryUrl={setCategoryUrl} />
      <main>
        <Switch>
          <Route exact path="/">
            {movies.map((movie) => {
              return (
                <ListedMovie
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  releaseDate={movie.release_date}
                  posterImgSrc={`${PosterImgUrl}${movie.poster_path}`}
                />
              );
            })}
          </Route>

          <Route exact path="/movies/:id">
            <MoviePage movies={movies} />
          </Route>

          <Route exact path="/404">
            <NotFound />
          </Route>
          <Redirect from="movies/*" to="/" />
          <Redirect to="/404" />
        </Switch>
      </main>
    </Router>
  );
};
