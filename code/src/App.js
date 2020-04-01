import React, { useEffect, useState } from 'react';
import { MovieList } from "./pages/MovieList"
import { Movie } from "./pages/Movie"
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GenreList } from 'pages/GenreList';

export const App = () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=ee5e4399bb9b4b26410c80fdb1ecdd56&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=14&page=1`, {
      method: "GET"
    })
    .then(response => response.json())
    .then(movies => setMovieList(movies.results))
  }, [])

  return (

    <Router>
    <Switch>

      <Route exact path="/">
        < MovieList movieList={movieList}/>
      </Route>

      <Route exact path="/movie/:moviedetails">
        <Movie />
      </Route> 

      <Route exact path="/genre/:selectedgenre">
        <GenreList />
      </Route> 

    </Switch>
    </Router>
  
  )
    
}
