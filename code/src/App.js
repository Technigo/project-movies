import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

// Components
import TopNav from './components/TopNav';
import ListedMovie from './components/ListedMovie';
import MoviePage from './pages/MoviePage';
import NotFound from './pages/NotFound';

// API-urls
import { ApiUrl, PosterImgUrl } from './components/ApiUrls';

// Styling
import 'assets/MediaQueries.css';

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
  }, [categoryUrl]); // Get data on every change of categoryUrl

  return (
    <Router>
      {/* Top navigation */}
      <TopNav setCategoryUrl={setCategoryUrl} getData={getData} />
      <main>
        <Switch>
          {/* Route to list of movies */}
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

          {/* Route to each single movie */}
          <Route exact path="/movies/:id">
            <MoviePage movies={movies} />
          </Route>

          {/* Route to all pages that aren't specified */}
          <Route exact path="/404">
            <NotFound />
          </Route>

          {/* Redirects */}
          <Redirect from="movies/*" to="/404" />
          <Redirect to="/404" />
        </Switch>
      </main>
    </Router>
  );
};
