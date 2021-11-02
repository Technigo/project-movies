import React, { useState, useEffect } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { MovieList } from './components/MovieList'
import { MovieDetails } from './components/MovieDetails'

import { FETCH_URL } from './utils/urls'

export const App = () => {

	const [movieList, setMovieList] = useState([])

	useEffect(() => {
		fetch(FETCH_URL)
		.then((res) => res.json())
		.then((json) => {
			setMovieList(json.results)
		})
	}, [])

  return (
    <div>
      <BrowserRouter>
	  	<Switch> 
			{/* path to the home page */}
			<Route path="/" exact>
				<MovieList  movieList={movieList}/>
			</Route>
			{/*path to the movie details */}
			<Route path="/movies/:movieId" >
				<MovieDetails /> 
			</Route>
		</Switch>
	  
	  </BrowserRouter>
    </div>
  )
}
