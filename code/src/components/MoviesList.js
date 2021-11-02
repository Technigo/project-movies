import React from "react";

const MoviesList = ({ films }) => {
    return (
        <>
        {films.map((movie) => (
            <div key={movie.id}>
               {movie.original_title}
               <img src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`} alt="picture"/>   
            </div>
        ))}          
        </>
    )
};

export default MoviesList;