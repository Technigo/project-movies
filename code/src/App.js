import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PopularList } from './pages/PopularList';
import { MovieDetail } from './pages/MovieDetail';
import { Loader } from './components/Loader';

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=a4952259f6d389d2957bfec34fa69938&language=en-US&page=1'
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setMovies(json.results);
        setLoading(false);
      });
  };

  const fetchMovie = (id) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=a4952259f6d389d2957bfec34fa69938&language=en-US`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setMovie(json);
      });
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          {isLoading ? <Loader /> : <PopularList movies={movies} />}
        </Route>
        <Route path="/movies/:id">
          <MovieDetail movie={movie} fetchMovie={fetchMovie} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
