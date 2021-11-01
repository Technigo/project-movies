import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import { BASE_URL } from './utils/urls';

import One from './components/One'
import Two from './components/Two'

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
		<Route 	path="/one" component={One}/>
		<Route 	path="/two" component={Two}/>
	 </Switch>
	</BrowserRouter>
	);
};

