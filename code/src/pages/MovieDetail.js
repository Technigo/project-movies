import React, { useEffect, useState} from 'react';
import { useParams, Redirect } from 'react-router-dom';

import { API_KEY } from 'urls'; 
import { MovieThumbSimilar } from 'components/MovieThumbSimilar';
import { Loader } from 'components/Loader';
import { BackButton } from 'components/BackButton';

import 'styles/moviedetail.css';

export const MovieDetail = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [similarmovies, setSimilarMovies] = useState([]);

  // Fecthing detailed information for the choosen movie
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json);
      })
  }, [id]);

  // Fetching similar movies API based on the id of the currently showed movie
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`)
      .then(res => res.json())
      .then(json => {
        setSimilarMovies(json.results)
        setLoading(false);
      })
  }, [id]);

  // Adds loader while the page is loading and until the API is loaded
  if (loading) {
    return <Loader />;
  // Check wheather there is errors or not, if the page doesn't exist 
  // the user gets directed to the Not Found page. 
  } else if (movies.success === false) {
    return <Redirect to="/404" />;
  } else {
    // If not led to the error page return the movie details: 
    return (
      <main 
        className="background-picture" 
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movies.backdrop_path})` }}
      >
        <section className="detailed-card">
          <BackButton />
          <div className="picture-text-rating-wrapper">
            <img 
                src={`https://image.tmdb.org/t/p/w342${movies.poster_path}`} 
                alt={movies.title} 
                className="detail-poster-image"
            />
            <div className="text-rating-overview-wrapper">
              <div className="top-info">
                <h2 className="movie-heading" tabIndex="0">{movies.title} 
                  <span 
                    className={movies.vote_average > 8.0 ? "rating high" : "rating low"}
                    tabIndex="0">
                    {movies.vote_average}/10
                  </span>
                </h2>
              </div>
              <p className="overview" tabIndex="0">{movies.overview}</p>
            </div>    
          </div>
        </section>
        <section className="similar-movies-container">
          {similarmovies.length > 0 && 
            <h3 className="similar-movies-heading" tabIndex="0">Similar movies to {movies.title}:</h3>}
          <div>
            {similarmovies.map((movie) => (
              <MovieThumbSimilar key={movie.id} {...movie} />
            ))}
          </div>
        </section>
      </main>
    );
  };
};