import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';

import MovieThumb from '../components/MovieThumb';
import { API_KEY } from '../api.js';

const MovieList = ({ children }) => {
  const [movies, setMovies] = useState([]);

  // 	The React docs say that you can use props.children on
  //components that represent ‘generic boxes’ and that ‘don’t know their children ahead of time’.
  //For me, that didn’t really clear things up.
  //I’m sure for some, that definition makes perfect sense but it didn’t for me.
  // My simple explanation of what this.props.children does is that it is used
  //to display whatever you include between the opening and closing tags when invoking a component.

  const API_URL = `https://api.themoviedb.org/3/movie/${
    children ? children : 'now_playing'
  }?api_key=${API_KEY}&language=en-US&page=1`;

  useEffect(() => {
    fetch(API_URL)
      .then(result => result.json())
      .then(json => {
        console.log(json.results);
        setMovies(json.results);
      });
  }, [API_URL]);

  return (
    <main className="main">
      {movies.map(movie => (
        <MovieThumb key={movie.id} {...movie} />
      ))}
    </main>
  );
};

export default MovieList;
