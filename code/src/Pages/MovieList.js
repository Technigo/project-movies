import React, { useState, useEffect } from 'react';

import { MOVIES_URL } from '../urls';
import Header from '../Components/Header';
import Loader from '../Components/Loader';
import Movie from '../Components/Movie';

const MovieList = () => {

    const [movieList, setMovieList] = useState([]);
    const [choosenAPI, setChoosenAPI] = useState(MOVIES_URL);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(choosenAPI)
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    setMovieList(data.results)
                    setLoading(false);
                }, 1500)
            })
    }, [choosenAPI]);

    // Reach the url choosen in movie details
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

// {movieList.map((movie) => {
//                     return (
//                         <Link
//                             to={`/movie/${movie.id}`}
//                             className="movie-wrapper"
//                             key={movie.id}>
//                             <div className="movie-image-overlay"></div>
//                             <div className="movie-start-info-container">
//                                 <h1>{movie.title}</h1>
//                                 <p>Released {movie.release_date}</p>
//                             </div>
//                             <img
//                                 className="movie-image"
//                                 src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
//                                 alt={movie.title}>
//                             </img>
//                         </Link>
//                     )
//                 })}