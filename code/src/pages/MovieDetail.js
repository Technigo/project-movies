import React, { useEffect, useState } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'

import BackButton from '../components/BackButton'



const MovieDetail = () => {
    const { id } = useParams()
    const history = useHistory()
    const [details, setDetails] = useState([])
    const [statusCode, setStatusCode] = useState(200)
    
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=2e6a7b75ad4d088fae1f52620044bef7&language=en-US`)
        .then((res) => {
            setStatusCode(res.status)
            return res.json()  
        }
        )
        .then((json) => setDetails(json))
    },[])

    useEffect(() => {
        if (statusCode !== 200) {
            console.log("IS ERROR")
            history.push("/error")
        }
    }, [history, statusCode])

    if (!details) {
        return <></>
    }

    const svgg = <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z" fill="#fff" fill-rule="evenodd"></path></svg>

    return (
        <div className='details-wrapper' 
            style={{
                backgroundImage: "url(https://image.tmdb.org/t/p/w1280" + details.backdrop_path
            }}
            >
            <BackButton />
            
            <div className="mobile-version">
                <img src={details.poster_path === null ? "../assets/poster_not_found.png" : `https://image.tmdb.org/t/p/w300${details.poster_path}`} alt={details.title}/>
                <h1>{details.original_title} <span>{details.vote_average}/10</span></h1>
                <p>{details.overview}</p>
            </div>

            <div className="desktop-version">
                <div className="information-wrapper">
                    <div className="image-wrapper">
                        
                        <img src={details.poster_path === null ? "../assets/poster_not_found.png" : `https://image.tmdb.org/t/p/w300${details.poster_path}`} alt={details.title}/>
                        
                        
                    </div>
                    <div className="text-wrapper">
                        <h1>{details.original_title}<span>{details.vote_average}/10</span></h1>
                        <p>{details.overview}</p>
                        
                    </div>
                </div>
            </div>

           
        </div>
    )
}

export default MovieDetail


/*

   {details.map((movie) => (
                <div>
                    <h1>{movie.original_title}</h1>
                    <h3>{movie.overview}</h3>
                    <h3>{movie.vote_avarage}</h3>
                    <img src={movie.backdrop_path} alt={movie.title} />
                </div>

            )
            )}


*/


/*
<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z" fill="#fff" fill-rule="evenodd"></path></svg>
                
<img src="./back.svg" alt="test" /><p>details</p>
*/


/* 
<img src={`https://image.tmdb.org/t/p/w300${details.poster_path}`} alt={details.title} />
*/