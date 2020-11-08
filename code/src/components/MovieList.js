import React, { useState, useEffect } from "react";
import { MovieThumb } from "components/MovieThumb";

import "./movieThumb.css";

export const MovieList = () => {
  const MOVIES_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=9dbb13757543047a90651a50d540380e&language=en-US&page=1";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(MOVIES_URL)
      .then((response) => response.json())
      .then((json) => setMovies(json.results));
  }, []);
  return (
    <section className="movie-list">
      {movies.map((movie) => (
      <MovieThumb  
            key={movie.id} 
            id={movie.id} 
             name={movie.title}
             background_image={movie.poster_path}
             releseDate={`Released ${movie.release_date}`}/>
      ))}
    </section>
  );
};

// --------------------saved notes -----------

// Exp: deconstructed props as we send them into moviethumb, gives acess to more API... 
// {/* <MovieThumb  key={movie.id} {...movie} /> */} 

//  to render something for each movie needs Map, we have to store the json/list of movies so useState is needed, variabel for rendering and a function to set that variabel.
// initial value from list of movies, empty array[].
// want to render same comp/html for each movie, but use specific info for each, map gives us ability to put out muliply pices och info.
// useffect = only do this one time waint until dependencis change then try again.....


