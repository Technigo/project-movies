import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { MAIN_URL } from './utils/urls'
import { MovieList } from 'Components/MovieList'
import { MovieDetails } from 'Components/MovieDetails'
import { LoadingItem } from 'Components/LoadingItem'
import { NotFound } from 'Components/NotFound'
import { Navbar } from 'Components/Navbar'
import { TopRatedFetch } from 'Components/TopRatedFetch'
import { UpcomingFetch } from 'Components/UpcomingFecth'
import { Footer } from 'Components/Footer'

export const App = () => {
	const [movieList, setMovieList] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		fetch(MAIN_URL)
			.then((res) => res.json())
			.then((data) => setMovieList(data.results))
			.finally(() => setLoading(false))
	}, [])

	console.log(movieList)

	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route
						path='/'
						element={
							<>
								{loading && <LoadingItem />}
								{!loading && <MovieList movieList={movieList} />}
							</>
						}
					/>
					<Route path='/details/:movieId' element={<MovieDetails />} />
					<Route path='/toprated' element={<TopRatedFetch />} />
					<Route path='/upcoming' element={<UpcomingFetch />} />
					<Route path='/404' element={<NotFound />} />
					<Route path='*' element={<Navigate to='/404' replace />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	)
}
