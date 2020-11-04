import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './FilmDetail.css'

export const FilmDetail = () => {
    const { filmid } = useParams();

    const [FilmDetails, setFilmDetails] = useState(""); 

    const fetchFilmId = (filmid) => {
        const api_key = "cf10fb16d5d29cc1bc7eb10f47f96663";
        const RG_API_FILM_DETAILS = `https://api.themoviedb.org/3/movie/${filmid}?api_key=${api_key}&language=en-US`;

        fetch(RG_API_FILM_DETAILS)
            .then((data) => {
                return data.json()
            })
                .then((data) => {
                    setFilmDetails(data);
                })
                .catch((error) => {
                    console.error(error);
                    })
    };

    useEffect(() => {
        fetchFilmId(filmid);        
    }, [filmid]);

    return (
        <article className="detail-page">
            <a href="/">
                Movie list
            </a>  
            <div className="background-image">
                <img src={`https://image.tmdb.org/t/p/original${FilmDetails.backdrop_path}`} alt="{title} film poster"/>
                <div className="details-container">
                <div className="film-poster">                
                    <img src={`https://image.tmdb.org/t/p/w342${FilmDetails.poster_path}`} alt="{title} film poster" className="image-details-background" />
                </div>
                <div className="film-details">
                    <div className="film-title-average">
                        <h3>{FilmDetails.title}</h3>
                        <p>{FilmDetails.vote_average}/10</p>
                    </div>
                    <p>{FilmDetails.overview}</p>
                </div>                
            </div>
            </div>          
        </article>
    );
};