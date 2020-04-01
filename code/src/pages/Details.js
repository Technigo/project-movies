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
            <Link to ="/" className="a-tag">
                <section className="details-wrapper">
                    {details.original_title}
                    <img src = {`https://image.tmdb.org/t/p/w342${details.poster_path}`}/>
                </section>
            </Link>
        )
    }
}