import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListedMovie from './components/ListedMovie';
import MoviePage from './pages/MoviePage';
import { ApiUrl, PosterImgUrl, BackdropImgUrl } from './components/ApiUrls';

export const App = () => {
  const [movies, setMovies] = useState([]);

  const getData = () => {
    fetch(ApiUrl)
      .then((results) => results.json())
      .then((json) => {
        setMovies(json.results);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Router>
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
        </Switch>
      </main>
    </Router>
  );
};
