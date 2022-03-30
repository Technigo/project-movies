import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MovieList } from 'pages/MovieList'
import { MovieDetails } from 'pages/MovieDetails'

export const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MovieList/>} />
                <Route path='/movie/:id' element={<MovieDetails/>} />
            </Routes>
        </BrowserRouter>
    )
}