import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
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

    const posterImage = `https://image.tmdb.org/t/p/w342${FilmDetails.poster_path}`;
    const backgroundImage = `https://image.tmdb.org/t/p/w1280${FilmDetails.backdrop_path}`;

    return (
        <>
            <article className="film-details-container">
                <Link to="/" className="back-link">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                    Film list
                </Link>             
                <div className="details-container">                    
                    <div className="film-poster">                
                        <img src={posterImage} alt="{title} film poster" className="image-details-background" />
                    </div>
                    <div className="film-details">
                        <div className="film-title-average">
                            <h3>{FilmDetails.title}</h3>
                            <p>{FilmDetails.vote_average}/10</p>
                        </div>
                        <p>{FilmDetails.overview}</p>
                    </div>
                </div>
            </article>
            <div className="background-image" style={{backgroundImage: `url("${backgroundImage}")`}}>
            </div>
    </>
    );
};