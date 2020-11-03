import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './movieDetails.css'

export const MovieDetails = () => {
    const { movieId } = useParams()
    const [movie, setMovie] = useState([])

    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=de0e6f6f34bb3f7060237da93b37b9e0&language=en-US`)
                                                                     
        .then((res) => res.json())
        .then((json) => {
          setMovie(json) 
        })
    }, [movieId])

    return (
      <article className="details-container" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path})` }} alt={movie.title}>
        <Link to={"/"} className="back-link">
          <img src="" alt="Go-back-button"></img>
          " Movies"
        </Link>
          <div className="details-backdrop" key={movie.id}>
            <div className="details-summary">
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
              <h1>{movie.title}</h1>
              <h3>Released {movie.relase_date}</h3>
              <h2>{movie.vote_average} / 10</h2>
              <h2>{movie.overview}</h2>
            </div>
          </div>
      </article>
    )
};