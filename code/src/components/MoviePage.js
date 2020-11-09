import React, { useEffect, useState} from 'react';
import {  useParams } from 'react-router-dom';

export const MoviePage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0cb608022c0a0fbef75881f68133d694&language=en-US`)
        .then((res) => res.json())
        .then((json) => {
            setMovie(json)
        });
    }, []);

 
    return (
        
        <section className='movie-page-background' 
        style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`}}>

        
        <div className='movie-page-container'>
          <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title}/>
          <div className='movie-details'>
            <h1>{movie.title}
              <span className='movie-rating'>
                {movie.vote_average}
              </span>
            </h1>
            <p>{movie.overview}</p>
          </div>
        </div>
      </section>
          );
        };
