import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export const MovieDetails = () => {
  const { movieId } = useParams();

  // const API_KEY = "ab5cef50889fc06c1a1e75470eefe28b";
  const URL_DETAILS =`https://api.themoviedb.org/3/movie/${movieId}?api_key=ab5cef50889fc06c1a1e75470eefe28b&language=en-US`;
  
  const [movieDetails, setMovieDetails] = useState({});


  useEffect(() => {
    fetch(URL_DETAILS)
    .then(res => res.json())
    .then(data => setMovieDetails(data));
  }, [URL_DETAILS,movieId]);

  return (
    <section className="details_page">
    <div className="details_backgrd" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path})` }} alt={movieDetails.title}>
      <div className="details_info">
         {/* <img src={`(https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} className="movie-poster" /> */}
         <div className="details_description">
            <h1>{movieDetails.title}</h1>
            <p>{movieDetails.overview}</p>
         </div>
      </div>
    </div>
    </section>
  )
};


