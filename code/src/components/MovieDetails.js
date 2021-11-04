import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
// import Loader from "react-loader-spinner"
import './movieDetails.css'
import { DETAILS_URL } from '../utils/urls'
// import { Loading } from '../components/Loading'

export const MovieDetails = () => {

	const { movieId } = useParams();
	const history = useHistory(); 

  const [details, setDetails] = useState([]);
	const [loading, setLoading] = useState(false);
	

	const goBack = () => {
		history.push("/")
	}
	
	useEffect(() => {
		fetch(DETAILS_URL(movieId))
		.then((res) => res.json())
		.then((json) => setDetails(json))
		.finally(() => setLoading(true))
	},[movieId])

  	{/* {loading && <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />} */}


    return (
	<>
  <section className="summary-section">
    <div className="summary-container">
    <div className="backdrop-overlay"></div>
    <div
        className="background-container"
        style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${details.backdrop_path})`,
        }}
        >
  <article className="info">
    {details && (
      <div className="details-overall">
        <img className="poster" src={`https://image.tmdb.org/t/p/w342/${details.poster_path}`} alt={details.title} />
        <h1 className="detail-title">{details.title}
        <span className="detail-rating"> {details.vote_average}/10</span>
        </h1>
        <p className="overview">{details.overview}</p>
        {/* <p className="details">Release date: {details.release_date}</p> */}
      </div>
      
    )}

<button className="back-button" onClick={goBack}>
{/* <i className="fa fa-chevron-circle-left"></i> */}
<span className="back-button-text">Back</span>
</button>


    
    </article>
    </div>
    </div>
    </section>
	
	</>
    )
  }
  

    
    

    // <div>
    // <h1>{details.title}</h1>
    // <p>{details.overview}</p>
    // <img src={`https://image.tmdb.org/t/p/w342/${details.poster_path}`} alt={details.title} />
    // <p>{details.vote_average}/10</p>
    // <p>Release date: {details.release_date}</p>
    //   </div>