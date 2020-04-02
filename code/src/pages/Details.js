import React, { useState, useEffect } from "react"
import {useParams} from 'react-router-dom';


export const Details = () => {
    const {id} = useParams();
    const detailsUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=a87d34281c8e1e04c49c6b1cfecbf6f0&language=en-US`
    const [details, setDetails]= useState();

    useEffect(() => { 
    fetch(detailsUrl)
        .then (res => res.json())
        .then (json => setDetails(json))
    },[detailsUrl, id])

    if (!details) {
        return <>Loading, please wait</>;
    } else {
        return (
         
                
        <div className="specific-detail-wrapper" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${details.backdrop_path})` }} alt={details.title}>
            <div className="specific-detail-box" >
                       
                <img className="specific-detail-img" alt= {details.original_title } src = {`https://image.tmdb.org/t/p/w342${details.poster_path}`}/>
                    <div className="specific-detail-txt" >
                       <div className=" in-line">
                            <h1 className="specific-title">{details.original_title }</h1>
                            <p className="vote-txt" >{details.vote_average} </p></div> 
                            <p className="specific-overview" > {details.overview} </p>
                        </div>
                    </div>
            </div>
         
        )
    }
}