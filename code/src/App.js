import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { MovieList } from 'pages/MovieList';
import { MovieDetails } from 'pages/MovieDetails';

export const App = () => {
  //state variables for parts of the image file paths
  const [baseUrl, setBaseUrl] = useState('');
  const [posterSize, setPosterSize] = useState();
  const [backdropSize, setBackdropSize] = useState('');
  const API_KEY = 'e09a63c0dcf4e1007de642df9ee29784';
  const CONFIG_URL = `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`;

  //Fetch to get the base URL and poster size for the image file paths
  useEffect(() => {
    fetch(CONFIG_URL)
    .then(res => res.json())
    .then((json) => {
      setBaseUrl(json.images.base_url)
      setPosterSize(json.images.poster_sizes[3])
      setBackdropSize(json.images.backdrop_sizes[2])
    })
  }, [CONFIG_URL]);

  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route exact path='/'>
            <MovieList 
              apiKey={API_KEY} 
              baseUrl={baseUrl} 
              posterSize={posterSize}
            />
          </Route>
          <Route path='/movies/:movieId'>
            <MovieDetails 
              apiKey={API_KEY}
              baseUrl={baseUrl}
              backdropSize={backdropSize}
              posterSize={posterSize}
            />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
};
