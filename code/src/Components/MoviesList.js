import React, {useState, useEffect} from 'react';

import { API_URL } from '../urls';

const MoviesList = () => {

    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                console.log(data.results)
                setMoviesList(data.results)
            })
    }, []);
    
    return (
        <main>
            {moviesList.map((movie) => {
                return (
                    <article key={movie.id}>
                        <h2>{movie.original_title}</h2>
                        <p>Released {movie.release_date}</p>
                    </article>

                )
            })}
            
        </main>
    ) 
}

export default MoviesList;