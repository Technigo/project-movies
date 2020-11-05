import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './movieDetails.css';

export const MovieDetails = () => {
    const { movieId } = useParams() 
    // useParams, imported from react-router-dom, gets the id from the URL and then 
    // passes that into an API call (within useEffect) to themoviedb.org to fetch 
    // details about a single movie, then puts the response into state using 
    // useState and finally renders it onto the page.
    
    const [movie, setMovie] = useState([])
    const api_key = 'de0e6f6f34bb3f7060237da93b37b9e0';

    // Here the fetch logic is put in useEffect and not in own function as I 
    // did in PopularList component. And useEffect is put inside MovieDetails
    // component and not called outside this component as in PopularList.
    // The api is stored outside the fetch (not inside as in PopularList), and 
    // the url is accessed directly from within the fetch. 
    // Both approaches declare useState within the components but outside the fetch 
    // and useEffect. 
    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=en-US`)
        .then((res) => res.json())
        .then((json) => {
          setMovie(json) 
        })
    }, [movieId])

  return (
    <article className="details-container" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path})` }} alt={movie.title}>
      <Link to={"/"} className="back-link">
        <svg className="details-back-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z" fill="#fff" fill-rule="evenodd"></path>alt="Go-back-button"</svg>
        <span className="details-text-arrow">{'Movies'}</span>
      </Link>
       <div className="details-summary" key={movie.id}>
         <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
         <div className="details-text">
           <h1>{movie.title} <span className="details-rating"> {movie.vote_average} / 10</span></h1>
           <h2>{movie.overview}</h2>
         </div>
       </div>
    </article>
  )
};