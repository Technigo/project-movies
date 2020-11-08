import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Redirect, useHistory } from 'react-router-dom'

export const MovieDetail = () => {
    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    const {id} = useParams();

    const API_KEY = '7a8b8f73f0f19bc86674c69db87cbbc7';
    const MOVIE_DETAILS_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;

    const fetchMoviesDetails = () => {
        setLoading(true);
        fetch(MOVIE_DETAILS_URL)
            .then(res => res.json())
            .then(data => {
                setDetails(data)
                setLoading(false)
            })
            .catch(error => console.error(error));
    }
  // Fetches Movies details and fetches it again when id is updated.
    useEffect(fetchMoviesDetails, [id])
    
    // Loading shows until fetch is complete.
    if(loading) {
        return <h2>Loading...</h2>
    }

    // If there is no details.id(aka no movie) it redirects to 404 page.
    if(!details.id) {
        return <Redirect to="/404"/> 
    } 
    
    return (
        <section className="summary-section">        
            <div className="summary-container">
                <div className="backdrop-overlay"></div>
                <img className="backdrop-pic" src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`} alt={details.title} />
                <div className="details-container">
                    <img className="poster-pic" src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt={details.title} />
                    <div className="details-information">
                        <h2>
                            {details.title}
                            <span className="rating">
                                {details.vote_average}/10
                            </span>
                        </h2>
                        <p>{details.overview}</p>
                    </div>
                </div>
                <button
                    className="back-link"
                    onClick={() => history.goBack()}
                >
                    <i className="fa fa-chevron-circle-left"></i>
                    <span className="back-link-text">Back</span>
                </button>
            </div> 
        </section> 
    )
    
}