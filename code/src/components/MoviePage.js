import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import MovieList from './MovieList'
import MovieDetails from './MovieDetails'
import NotFound from './NotFound';


const MoviePage = () => {

    return (
        <main>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<MovieList />} />
                    <Route path="/movies/:id" element={<MovieDetails />} />
                    <Route path='/404' element={<NotFound/>}/>
                    <Route path='*' element={<Navigate to="/404" replace/>}/> 
                </Routes>
            </BrowserRouter>
        </main>
    )
}

export default MoviePage