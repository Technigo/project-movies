import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { PopularList } from 'components/PopularList'
import { Details } from 'components/Details'
import { Header } from 'components/Header'

const API_KEY = '3bf2860c1d44881bc87143482ddf0f94';
const API = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
const baseURL = "https://image.tmdb.org/t/p/";
const imgSize = "original";


export const App = () => {

	const [movies, setMovies] = useState([])
	// const [movie, setMovie] = useState({})

    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((json) => setMovies(json.results));
    }, []);

	return (
		<BrowserRouter>
			<Header title="Movies!"/>
			<Routes>
				<Route path="/" exact 
					element={
						<PopularList
							movies={movies}
							baseURL={baseURL}
							imgSize={imgSize}
						/>}
				/>
				<Route path="/movies/:movieId" element={<Details />} />
				{/* <Route path='/404' element={<NotFound/>}/>
				<Route path='*' element={<Navigate to="/404" replace/>}/>  */}
			</Routes>
		</BrowserRouter>
	)
}
