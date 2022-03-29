import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MovieList from './MovieList'
import MovieDetails from './MovieDetails'


const MoviePage = () => {

    return (
        <main>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<MovieList />} />
                    <Route path="/movies/:id" element={<MovieDetails />} />
                </Routes>
            </BrowserRouter>
        </main>
    )
}

export default MoviePage