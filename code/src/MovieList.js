import React, { useState, useEffect } from 'react';

export const MovieList = () => {
    const [movies, setMovies] = useState([])

    // fetch to call the API
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=b230af0ba5dd0959429a398c958e6e4e&language=en-US&page=1')
            .then((response) => response.json())
            .then((json) => {
                setMovies(json.results);
            })
    }, []);

    return (
        <div className="allMovies">
            {movies.map((movies) => (  // map over all movies and for each one display: img, title & release date 
                <div className="eachMovie">
                    <img className="movieThumbnail" src={`https://image.tmdb.org/t/p/w300${movies.poster_path}`} alt="{movies.title}" />
                        <h1 className="movieTitle1"> {movies.title} </h1>
                            <p className="releaseDate"> {movies.release_date} </p>    
                </div>
            ))}         
        </div> 
    ) 

}


