import React, { useEffect, useState } from 'react'
//import { Link, NavLink } from 'react-router-dom'
//To be able to use <Link> or <NavLink> tags in components (see Damiens first video)

const MOVIES_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=2df2062fe6afeadacbfc1fd0a84167fa&language=en-US&page=1'
 // const API_KEY = '2df2062fe6afeadacbfc1fd0a84167fa'

 //Here we will do the fetch
const MovieList = () => {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    fetch(MOVIES_URL) //Fetch Movies from the API
    .then(response => response.json())
    .then(json => {
      //Do something here to set the json in the state (setMovies)
      setMovies(json.results)
      console.log(json.results);
    })
  }, [])
  //What is the link on movie-list-movie-wrapper going to go to? Right now it's wrong!
  return (
    <div> 
      {movies.map((movie) => (
        <a className="movie-list-movie-wrapper" href= {`https://image.tmdb.org/t/p/w342${movie.poster_path}`} key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
          <div className="movie-list-details"> 
            <h2 className="movie-list-title">{movie.title}</h2>
            <p className="movie-list-release">Release-date: {movie.release_date}</p>
          </div>
        </a>
      ))}
    </div>
  );
};
export default MovieList; 