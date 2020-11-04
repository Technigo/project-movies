import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom' // NavLink?
//To be able to use <Link> or <NavLink> tags in components (see Damiens first video)
import '../styles/MovieList.css'
const API_KEY = '2df2062fe6afeadacbfc1fd0a84167fa'
const MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`

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
  
  //The Link shoud go to the MovieDetails component? <Link to={what to put here?}
  return (
    <div className="list-movie-wrapper"> 
      {movies.map((movie) => (
        <> 
          <Link to={`movie/${movie.id}`} key={movie.id}> 
          {/* <a 
            href= {`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} 
            > */}
            <img 
              className="list-movie-poster" 
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} 
              alt={movie.title} />
            <div className="list-details-wrapper"> 
              <h2 className="list-title">{movie.title}</h2>
              <p className="list-release">Release-date: {movie.release_date}</p>
            </div>
          {/* </a> */}
          </Link>
        </>
      ))}
    </div>
  );
};
export default MovieList; 