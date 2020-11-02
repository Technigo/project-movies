import React, { useState, useEffect } from 'react';

import { MOVIES_URL } from '../urls';
import Header from '../Components/Header';
import Loader from '../Components/Loader';
import Movie from '../Components/Movie';

const MovieList = () => {

    const [movieList, setMovieList] = useState([]);
    const [choosenAPI, setChoosenAPI] = useState(MOVIES_URL);
    const [loading, setLoading] = useState(true); //Show loader

    useEffect(() => {
        fetch(choosenAPI)
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    setMovieList(data.results)
                    setLoading(false); // Hide loader
                }, 1500)
            })
    }, [choosenAPI]);

    // Reach the url choosen in header
    const reachAPIValue = (apiURL) => {
        setChoosenAPI(apiURL);
        setLoading(true);
    }
   
    return (
        <>
            <Header reachAPIValue={reachAPIValue} />
            <main className="movies-container">
                {loading && <Loader />}
                
                {!loading && movieList.map((movie) => {
                    return <Movie key={movie.id} {...movie} />
                })}
            </main>
        </>
    ) 
}

export default MovieList;