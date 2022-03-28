import React, { useState, useEffect } from 'react';
// import { URL_MOVIES } from 'utils/urls';

const URL_MOVIES = 'https://api.themoviedb.org/3/movie/popular?api_key=e99c6c8e9d657c50fc40ffe9db9d16f5&language=en-US&page=1';

const MovieCards = () => {
    return (
        <section className="movie-card">
            {movies.map(singleMovie => ( 
            <article key={singleMovie.id}>
            {/* <img src={} alt='movie-cover' /> */}
            <h3>{singleMovie.title}</h3>
            </article>
            ))}
        </section> 
    )   
}

fetch(URL_MOVIES) 
.then(res  => res.json())
.then((data) => console.log(data))




export default MovieCards;
