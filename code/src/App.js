import React, { useState, useEffect } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import { Header } from './components/Header'
import { MovieList } from './components/MovieList'
import { MovieDetails } from './components/MovieDetails'


import { FETCH_URL } from './utils/urls'

export const App = () => {

	const [movieList, setMovieList] = useState([])


	useEffect(() => {
		fetch(FETCH_URL)
		.then((res) => res.json())
		.then((json) => setMovieList(json.results))

	}, [])

  return (
	  
  <BrowserRouter>
	  <Header  />                                   {/* header is in between so it shows on each page */}
	  	<Switch> 
			<Route path="/" exact >                     {/* path to the home page */}
				<MovieList  movieList={movieList}/>
			</Route>
			<Route path="/movies/:movieId" >            {/*path to the movie details */}
				<MovieDetails /> 
			</Route>
		</Switch>
	</BrowserRouter>
  );
}
