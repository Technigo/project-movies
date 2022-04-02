import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { API_DETAILS } from '../utils/urls'
import '../css/detail.css'


const Detail = () => {
const [details, setDetails] = useState({});
const {movieId} = useParams();
const navigate = useNavigate();
const onBackButtonClick = () => {
    navigate(-1);
}

useEffect (() => {
    fetch(API_DETAILS(movieId))
    .then((res) => res.json())
    .then((data) => setDetails(data))
    }, [movieId]) 

    return (
        <section>
            {details && (
                <div className="details-container">
                   <img className="movie-background" src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`} alt={details.title} />
                    <div className="detail-grid">
                      <button onClick={onBackButtonClick}>back to movies</button>
                        <div className="detail-content">
                           <img src={`https://image.tmdb.org/t/p/w342${details.poster_path}`} alt={details.title} />
                            <div className="detail-text">
                                <h1>{details.title} <span className="detail-vote">{details.vote_average}/10</span></h1>
                                <p>{details.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )} 
        </section>
    )
}

export default Detail;
