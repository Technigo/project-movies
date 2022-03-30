import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { API_DETAILS } from '../utils/urls'


const Detail = () => {
const [details, setDetails] = useState({});
const {movieId} = useParams();
// const navigate = useNavigate();
// const onBackButtonClick = () => {
//     navigate(-1);
// }
useEffect (() => {
    fetch(API_DETAILS(movieId))
    .then((res) => res.json())
    .then((data) => setDetails(data))
    }, [movieId]) 

    return (
       <section>
        {details && (
            <div
                className="background"
                style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${details.backdrop_path})` }}
            >
                <div>
                    <h1>{details.title}</h1>
                    <p>{details.overview}</p>
                    <img src={`https://image.tmdb.org/t/p/w342${details.poster_path}`} alt={details.title} />
                </div>
            </div>
       )} 
      </section>
    )
}

export default Detail;
