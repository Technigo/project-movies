import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Loader from './Loader';
import { HALLOWEEN_URL } from 'utils/urls';


const HalloweenList = () => {
    const [movies, setMovies] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);
        fetch(HALLOWEEN_URL)
        .then(res => res.json())
        .then((json) => setMovies(json.results))
        .finally(setLoader(false));
    }, []);


return (
    <section className="movies">
        {loader && <Loader />}
        {movies.map((movie) => (
            <Link key={movie.id} to={`/movies/${movie.id}`}>
            <div>
                <img src ={`https://image.tmdb.org/t/p/w780${movie.poster_path}`} alt="posters of movies"></img>
				<div className="details">
                    <h1>{movie.title}</h1>
                    <p>Released {movie.release_date}</p>
                </div>
			</div>
            </Link>
        ))}
    </section>
    ); 
};

export default HalloweenList;