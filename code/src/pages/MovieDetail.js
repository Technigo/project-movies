import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetail = () => {
    const {id} = useParams();

    const API_KEY = '7a8b8f73f0f19bc86674c69db87cbbc7'
    const MOVIE_DETAILS_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;

    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetchMoviesDetails();
      }, []);

    const fetchMoviesDetails = () => {
        fetch(MOVIE_DETAILS_URL)
            .then(res => res.json())
            .then(data => setDetails(data))
            .catch(error => console.error(error));
      }
    
    return (
        <section className="details-section">
            <div className="backdrop-container">
                <div className="backdrop-overlay"></div>
                <img className="backdrop-pic" src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`} alt={details.title} />
                <div className="details-container">
                    <img className="poster-pic" src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt={details.title} />
                    <div className="details-information">
                        <h2>{details.title}</h2>
                        <p>{details.overview}</p>
                    </div>
                </div>
            </div>
           
            
            
                
  
        </section> 
    )
}