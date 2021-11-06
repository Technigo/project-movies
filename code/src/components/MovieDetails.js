import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import './movieDetails.css'

import { DETAILS_URL } from '../utils/urls'
import { Loading } from '../components/Loading'


export const MovieDetails = () => {

	const { movieId } = useParams();
	const history = useHistory(); 

  	const [details, setDetails] = useState([]);
	const [loading, setLoading] = useState(true);

	const detailStyling = {
		backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) -70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w1280/${details.backdrop_path})`,
		minHeight: '100vh',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat'
	}

	const goBack = () => {
		history.push("/")
	}
	
	useEffect(() => {
		fetch(DETAILS_URL(movieId))
		.then((res) => res.json())
		.then((json) => { 
			setLoading(false)
			setDetails(json)
		})
	},[movieId]);


    return (
	<>
	{loading && <Loading />} 
  	<section className="summary-section">
			<div
					className="background-container"
					style={detailStyling}
					>
				<article className="info">
					<div className="details-overall">
						<img className="poster" src={`https://image.tmdb.org/t/p/w342/${details.poster_path}`} alt={details.title} />
					<div className="details">
            <h2 className="detail-title">{details.title}</h2>
						<span className="detail-rating"> {details.vote_average}/10</span>
            <h4>"{details.tagline}"</h4>
            <p className="overview">{details.overview}</p>
            <h5><span>Length:</span> {details.runtime} minutes</h5>
            </div>
					</div>
					<button className="back-button" onClick={goBack}>
							<i className="fa fa-chevron-circle-left"></i>
							<span className="back-button-text">HOME</span>
					</button>
				</article>
    		</div>
    </section>
	</>
    );
  }
  
