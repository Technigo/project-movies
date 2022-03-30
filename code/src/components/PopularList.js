import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import Details from './Details';
const API_KEY = '3bf2860c1d44881bc87143482ddf0f94';

const API = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;


const baseURL = "https://image.tmdb.org/t/p/";
const posterSize = "original";

export const PopularList = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((json) => setMovies(json.results));
    }, []);

    console.log(movies)
    return (
        <div>
            hej
            {movies.map((movie) => (
                <Link 
                    key={movie.id}
                    to={`/movies/${movie.id}`}
                >
                    <img src={`${baseURL}${posterSize}${movie.poster_path}`} alt={movie.orginal_title} />
                    <h2>{movie.original_title}</h2>
                    <p>{movie.release_date}</p>
                </Link>
            ))}
        </div>
    )
}
