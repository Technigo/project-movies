import React from 'react';
import { BackButton } from './BackButton';
import { Link } from "react-router-dom";

export const Movie = ({movie}) => {

  console.log("selected movie", movie)

  return (

  <article className="selected-movie" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}>

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
        <p>Genre: {movie.genre_ids.map(genre => { 
          return (
            <Link to={`/genre/${genre}`} key={genre}>
              {genre} &nbsp;
            </Link>
          )
        })}</p>
      </section>
    </div> 

  </article>

  )
}
