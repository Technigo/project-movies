import React, { useState } from 'react';


export const MovieList = () => {
    
   const MOVIES_URL = "https://api.themoviedb.org/3/movie/popular?api_key=9dbb13757543047a90651a50d540380e&language=en-US&page=1";
   const[movies, setMovies] = useState([]);

    fetch(MOVIES_URL)
    .then(response => response.json())
    .then((json) => setMovies(json.results));

    return (    
       <section className="movie-list">

      {movies.map((movie) => movie.original_title)}
      </section>
      
      )


  }



        // to render something for each movie need Map, we have to store the jsoan/list of movies so useState is needed, variabel for rendering and and a function to set that variabel.
        // initial value fro list of movies lika med [].
        // want to render same comp/html for each Gamepad, but use specific info for each Gamepad.apply, Mag gives us ability to put out muliply pices och info.