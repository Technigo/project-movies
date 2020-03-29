import React, { useEffect, useState } from 'react';
import { MovieList } from "./pages/MovieList"
import { ShowMovieDetails } from "./pages/ShowMovieDetails"
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const App = () => {

  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=ee5e4399bb9b4b26410c80fdb1ecdd56&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=14&page=1", {
      method: "GET"
    })
    .then(response => response.json())
    .then(movies => setAllMovies(movies.results))
  }, [])

  return (

    <Router>
    <Switch>

      <Route exact path="/">
        < MovieList movies={allMovies}/>
      </Route>

      <Route exact path="/movie/:moviedetails">
        <ShowMovieDetails movies={allMovies}/>
      </Route> 

    </Switch>
    </Router>
  
        // < Movies allMovies={allMovies} /> 

  )
    
  }

// "https://api.themoviedb.org/3/discover/movie?api_key=ee5e4399bb9b4b26410c80fdb1ecdd56&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=14&page=1"