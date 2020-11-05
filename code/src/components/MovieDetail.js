import React, { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';
import { API_KEY } from '../key';
import Icon from './back_button.svg'

export const MovieDetail = () => {
    const { movieId } = useParams();
    const [movies, setMovies] = useState([]);
    const DETAILS_API = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;

    useEffect(() => {
      fetch(DETAILS_API)
      .then((response) => response.json())
      .then((json) => {
        setMovies(json)
        })
        .catch((error) => {
            console.error('Request failed', error)
        })
}, [movieId, DETAILS_API])


return(
<>
    <article className ="details-page">
      <section className="detail-backdrop" style={{  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%),  url(https://image.tmdb.org/t/p/w1280${movies.backdrop_path})` }}>
        <div className="movie-detail-content">  
          <div className="movie-detail-back">
            <Link to ="/" className="link" exact='true'>
              <img className="back-icon" src={Icon} style={ {width:"20px"} }  alt="icon" /> 
              <div className="back-text">Movies</div>
            </Link>
                <img className="movie-poster" src={`https://image.tmdb.org/t/p/w342${movies.poster_path}`} alt={movies.title} /> 
          </div>  
          <div className="movie-detail-text"> 
            <h1 className="movie-detail-title">{movies.title}
            <span className="rating">{movies.vote_average}/10 </span></h1> 
            <p className="overview">{movies.overview}</p>     
          </div>
        </div>
      </section>
    </article>  
</>
  );
};
