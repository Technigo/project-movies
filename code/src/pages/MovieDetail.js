import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from 'urls'; 
import { Link } from 'react-router-dom';
import { NotFound } from 'components/NotFound';
import 'styles/moviedetail.css';

export const MovieDetail = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);

  // Fecthing detailed information for the choosen movie
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        return  res.json();
      })
      .then((json) => {
        setMovies(json)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [id])

  // Check wheather the movie picture is found in the API or not, 
  // if not in this API list the user comes to the Not Found page 
  // where it is possible to go back to the home page.
  if (movies.backdrop_path === null || movies.backdrop_path === undefined) {
    return  <NotFound />
  } else {
    // If not led to this error page return the movie details: 
    return (
      <main 
        className="background-picture" 
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movies.backdrop_path})` }}
      >
        <section className="detailed-card">
          <Link key={id} to={`/`} className="back-link">
            <span className="arrows-wrapper">
              <i className="arrow left"></i>
              <i className="arrow left"></i>
              <i className="arrow left"></i>
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
};