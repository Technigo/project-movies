import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { LIST_LINK } from 'utils/Urls';

import List from 'components/List';
import Details from 'components/Details';
import NotFound from 'components/NotFound'

export const App = () => {
  
 const [list, setList] = useState([]);

 useEffect(()=> {
	 fetch(LIST_LINK)
	 .then(res => res.json())
	 .then(data => setList(data.results))
 }, [])

	return (
	  <BrowserRouter>
		<Routes>
		  <Route path='/' element={<List list = {list}/>}/>
		  <Route path=':movieId' element={<Details />}/>
		  <Route path='/404' element={<NotFound/>}/>
		  <Route path='*' element={<Navigate to='/404' replace/>}/>
		</Routes>
	  </BrowserRouter>
	)
  }
