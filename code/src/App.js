import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieInList from './components/MovieInList';
import MoviePage from './components/MoviePage';
import {
  ApiUrl,
  ApiImgUrl,
  ApiDetailsUrlPt1,
  ApiDetailsUrlPt2,
} from './components/ApiUrls';

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [imgUrl, setImgUrl] = useState('');
  const [imgSize, setImgSize] = useState('');

  const getData = () => {
    fetch(ApiUrl)
      .then((results) => results.json())
      .then((json) => {
        setMovies(json.results);
      });
  };

  const getImgData = () => {
    fetch(ApiImgUrl)
      .then((results) => results.json())
      .then((json) => {
        setImgUrl(json.images.secure_base_url);
        setImgSize(json.images.poster_sizes[2]);
      });
  };

  const getDetailsData = (id) => {
    fetch(`${ApiDetailsUrlPt1}${id}${ApiDetailsUrlPt2}`)
      .then((results) => results.json())
      .then((json) => console.log('HEJ'));
  };

  useEffect(() => {
    getData();
    getImgData();
  }, []);

  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/">
            {movies.map((movie) => {
              return (
                <MovieInList
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  releaseDate={movie.release_date}
                  posterImgSrc={imgUrl + imgSize + movie.poster_path}
                  getDetailsData={getDetailsData}
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
