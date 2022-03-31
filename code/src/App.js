import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PopularList } from 'components/PopularList';
import { Details } from 'components/Details';
import NotFound from 'components/NotFound';
import styled from 'styled-components'
import LoadingPage from 'components/LoadingPage';

const API_KEY = '3bf2860c1d44881bc87143482ddf0f94';
const API = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
const baseURL = "https://image.tmdb.org/t/p/";
const imgSize = "original";

const StyledButton = styled.button`
    padding: 10px;
    color: white;
    background: rgba(0, 0, 0, 0.4);
    font-style: italic;
    font-size: 1rem;
    font-weight: 500;
    max-width: fit-content;
    max-height: 3rem;
    border: 2px solid white;
    border-radius: 2rem;
    cursor: pointer;
`;

export const App = () => {
	const [movies, setMovies] = useState([])
	const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((json) => {
				setMovies(json.results)
				setLoading(false)
			});
    }, []);

	return (
		(loading
			? <LoadingPage />
			: <BrowserRouter>
				<Routes>
					<Route path="/" exact 
						element={
							<PopularList
								movies={movies}
								baseURL={baseURL}
								imgSize={imgSize}
							/>
						}
					/>
					<Route path="/movies/:movieId" 
						element={<Details 
							API_KEY={API_KEY}
							StyledButton={StyledButton}
							loading={loading}
							setLoading={setLoading}
						/>}
					/>
					<Route path='/404' element={<NotFound StyledButton={StyledButton} />} />
					<Route path='*' element={<Navigate to="/404" replace/>}/> 
				</Routes>
			</BrowserRouter>
		)
	)
}
