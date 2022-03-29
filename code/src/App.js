import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LIST_LINK, MOVIE_DETAILS } from 'utils/Urls';

import List from 'components/List';
import Details from 'components/Details';

export const App = () => {
	const [ list, setList ] = useState([]);

	useEffect(() => {
		fetch(LIST_LINK).then((res) => res.json()).then((data) => {
			setList(data.results);
		});
	}, []);

	console.log(list);
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<List movies={list} />} />
				<Route path="/one" element={<Details />} />
			</Routes>
		</BrowserRouter>
	);
};
