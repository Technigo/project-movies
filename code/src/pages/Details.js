import React, { useState, useEffect } from "react"
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom'

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
        return <>SORRY ABOUT THAT, ITS NOT FOUND!</>;
    } else {
        return (
         
                
                <section className="specific-detail-wrapper" /* style= background-image: linear-gradient(rgba   (0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url("https://image.tmdb.org/t/p/w1280/lvjRFFyNLdaMWIMYQvoebeO1JlF.jpg") */>
                    <div className="specific-detail-text-box" >
                        {details.original_title}
                        <img className="specific-detail-img" src = {`https://image.tmdb.org/t/p/w342${details.poster_path}`}/>
                        <div className="specific-detail-img" >
                        <p>{details.original_title }</p>
                        <p>{details.vote_average} </p>
                        <p> {details.overview} </p>
                        </div>
                    </div>
                </section>
         
        )
    }
}