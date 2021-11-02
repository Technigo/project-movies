import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import { BASE_URL } from './utils/urls';

import List from './components/List'
import Details from './components/Details'

export const App = ()=> {
	const [list,setList]=useState([])
	useEffect (()=>{
		fetch (BASE_URL)
		.then((res)=> res.json())
		.then((data)=> setList(data.results))
	}, [])
	console.log(list)
return (
	// <div>
	// 	This is my only page bla bla bla
	// </div>
	<BrowserRouter>
	 <Switch>
		<Route exact path="/" render={() => <List movies={list}/>}/>
		<Route 	path="/details" component={Details}/>
	 </Switch>
	</BrowserRouter>
	);
};

