import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const MovieDetails = () => {
    const { id } = useParams();
    // const MOVIE_DETAILS = `https://api.themoviedb.org/3/movie/${id}?api_key=2fe46756497dd387b1c58889ecdd2fe2&language=en-US`;
    const [movies, setMovies] = useState([]);

    useEffect(() => {
    fetch(`MOVIE_DETAILS`)
        .then((response) => response.json())
        .then((json) => setMovies(json.results));
    }, []);

    return  <section id={id} className="movie-details">
            <Link to="/"> 
                <button type="button">Back</button>
               <h1>Add in some information</h1>
            </Link>
            </section>;
};

export default MovieDetails