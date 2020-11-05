import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import './FilmDetail.css' 

export const FilmDetail = () => {
    const { filmid } = useParams();

    const [loading, setLoading] = useState(true);
    const [FilmDetails, setFilmDetails] = useState({}); 

    const fetchFilmId = (filmid) => {
        const api_key = "cf10fb16d5d29cc1bc7eb10f47f96663";
        const RG_API_FILM_DETAILS = `https://api.themoviedb.org/3/movie/${filmid}?api_key=${api_key}&language=en-US`;

        fetch(RG_API_FILM_DETAILS)
            .then((data) => {
                return data.json()
            })
                .then((data) => {
                    setFilmDetails(data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error(error);
                    })
    };

    useEffect(() => {
        fetchFilmId(filmid);        
    }, [filmid]);

    if (loading === true) {
        return (
            <article className="loader-article">
                <div className="loader-container">
                    <svg className="film" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" ><path d="M0 0h24v24H0z" fill="none"/><path d="M18 4l2 3h-3l-2-3h-2l2 3h-3l-2-3H8l2 3H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4zm-6.75 11.25L10 18l-1.25-2.75L6 14l2.75-1.25L10 10l1.25 2.75L14 14l-2.75 1.25zm5.69-3.31L16 14l-.94-2.06L13 11l2.06-.94L16 8l.94 2.06L19 11l-2.06.94z"/></svg>            
                    <h3>Loading ...</h3>
                </div>
            </article>
        );          
    }

    const posterImage = `https://image.tmdb.org/t/p/w342${FilmDetails.poster_path}`;
    const backgroundImage = `https://image.tmdb.org/t/p/w1280${FilmDetails.backdrop_path}`;

    return (
        <> 
            <article className="film-details-container">
                <Link to="/" className="back-link">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                    Back to film list
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