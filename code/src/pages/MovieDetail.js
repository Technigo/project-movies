import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from 'urls'; 
import 'styles/moviedetail.css';

export const MovieDetail = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
 
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json)
      })
  }, [id])

  return (
    <main>
      <img 
          src={`https://image.tmdb.org/t/p/w1280${movies.backdrop_path}`} 
          alt={movies.title}
          className="background-picture" 
      />
      <section className="detailed-card">
        <div className="picture-text-rating-wrapper">
          <img 
              src={`https://image.tmdb.org/t/p/w342${movies.poster_path}`} 
              alt={movies.title} 
              className="detail-poster-image"
          />
          <div className="text-rating-overview-wrapper">
            <div className="top-info">
              <h2>{movies.original_title}</h2>
              <p className="rating">{movies.vote_average}/10</p>
            </div>
            <p className="overview">{movies.overview}</p>
          </div>    
        </div>
      </section>
    </main>
  );
};