import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import  MovieCards  from 'components/MovieCards';
import { URL_MOVIES } from 'utils/urls';
import  MovieDetails  from 'components/MovieDetails';

export const Overview = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(URL_MOVIES)
            .then(res  => res.json())
            .then(data => {
                console.log(data)
                setMovies(data.results);
            });
    }, []);

    return (
        <BrowserRouter>
        <Routes>
            <Route
                path="/"
                element={<MovieCards movies={movies}/>}/>
            <Route path ="/MovieDetails/:id" element={<MovieDetails/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Overview;
