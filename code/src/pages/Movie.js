import React, { useState, useEffect } from 'react';
import { BackButton } from '../Components/BackButton';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const Movie = () => {

  const [movie, setMovie] = useState();
  const params = useParams();

  useEffect(() => {
    fetch(`
    https://api.themoviedb.org/3/movie/${params.moviedetails}?api_key=ee5e4399bb9b4b26410c80fdb1ecdd56&language=en-US`, {
      method: "GET"
    })
    .then(response => response.json())
    .then(selectedMovie => setMovie(selectedMovie))
  }, [])

  if(movie === undefined)
    return (
      <div>Loading</div>
    );
  
  else {
    return ( 

    <article className="selected-movie" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}>

        <Link to="/" className="back-btn"> 
          <div className="btn">
            < BackButton />
          </div>
          <p>Movies</p>
        </Link>
      
      <div className="selected-movie-details" key={movie.id}>
        <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="movie poster"></img>

        <section className="movie-overview">
          <h1>{movie.title}, <span className="rating">{movie.vote_average} /10 </span> </h1>
          <p className="movie-summary">{movie.overview} </p>
          <p className="genre"> Genre: &#160; {movie.genres.map((genre, index) => { 
           console.log("genre.length", movie.genres.length)
           console.log("index", index)
            
            return (
              <>
              <Link to={`/genre/${genre.id}`} key={genre.id}>
                <span className="genre-link">{genre.name}</span> 
              </Link>
              <span>{(movie.genres.length-1 > index) ? ", " : ""}</span>
              </>
            )
          })}</p>
        </section>
      </div> 

    </article>

    )
  }
}
