import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom"
import { MovieList } from './MovieList';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const GenreList = () => {

  const [movieList, setMovieList] = useState();
  const params = useParams();
  console.log("params", params.selectedgenre)
  console.log("movielist", movieList)
  
  useEffect(() => {
    fetch(`
    https://api.themoviedb.org/3/discover/movie?api_key=ee5e4399bb9b4b26410c80fdb1ecdd56&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${params.selectedgenre}`, {
      method: "GET"
    })
    .then(response => response.json())
    .then(genre => setMovieList(genre.results))
  }, [])

  if (movieList === undefined) {
    return (<div>Loading</div>)
   }
   
   return (

      <MovieList movieList={movieList}/>

   )
  
  
}

