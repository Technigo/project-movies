import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { PopularList } from 'components/PopularList'
import { Details } from 'components/Details'
import { Header } from 'components/Header'

export const App = () => {
	return (
		<BrowserRouter>
			<Header title="Movies!"/>
			<Routes>
				<Route path="/" exact element={<PopularList />} />
				<Route path="/movies/:movieId" element={<Details />} />
				{/* <Route path='/404' element={<NotFound/>}/>
				<Route path='*' element={<Navigate to="/404" replace/>}/>  */}
			</Routes>
		</BrowserRouter>
	)
}
