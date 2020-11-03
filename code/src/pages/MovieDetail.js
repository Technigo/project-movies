import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from 'urls'; 
import { Link } from 'react-router-dom';
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

  // `https://image.tmdb.org/t/p/w1280${movies.backdrop_path}`
  return (
    <main 
      className="background-picture" 
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movies.backdrop_path})` }}>
      <section className="detailed-card">
        <Link key={id} to={`/`} className="back-link">
          <span className="arrows-wrapper">
            <i class="arrow left"></i>
            <i class="arrow left"></i>
            <i class="arrow left"></i>
          </span>
          Movies
        </Link>
        <div className="picture-text-rating-wrapper">
          <img 
              src={`https://image.tmdb.org/t/p/w342${movies.poster_path}`} 
              alt={movies.title} 
              className="detail-poster-image"
          />
          <div className="text-rating-overview-wrapper">
            <div className="top-info">
              <h2>{movies.title} 
                <span className="rating">{movies.vote_average}/10</span>
              </h2>
            </div>
            <p className="overview">{movies.overview}</p>
          </div>    
        </div>
      </section>
    </main>
  );
};